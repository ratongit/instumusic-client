
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import usefavorites from '../Hooks/usefavorites';



const Checkout = ({ price }) => {

  const [favorites] = usefavorites()

  // console.log(price)
  const stripe = useStripe();
  const elements = useElements();



  const { user } = useAuth()

  const [clientSecret, setClientSecret] = useState('');
  const [waiting, setwaiting] = useState(false)
  const [trnxId, setTrnXId] = useState('')

  useEffect(() => {
    if (user?.email) {
      fetch('https://instrument-server.vercel.app/create-payment-intent', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ price })
      })
        .then(res => res.json())
        .then(data => {
          console.log("clientSecret is", data.clientSecret)
          setClientSecret(data.clientSecret);
        })
    }
  }, [price])


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    setwaiting(true)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error is  the frist]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }



    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email
          }
        },
      },
    );

    if (confirmError) {
      console.log('comfrom erroe is ', confirmError)
    } else {
      setwaiting(false)
      alert('payment Sucessfull')
      console.log('paymentIntent is up', paymentIntent)
    }
    if (paymentIntent.status
      === 'succeeded') {

      const transactionId = paymentIntent.id
      setTrnXId(transactionId)



      // seve  peymant data in mogodb 


      const payment = {
        name: user?.displayName,
        transactionId: transactionId,
        email: user?.email,
        Amount: price,
        quantity: favorites.length,
        itemsID: favorites.map(item => item._id),
        favoriteID: favorites.map(item => item.favorite),
        Full_items: favorites.map(item => item),
        status: 'subscriber'
      }

      console.log(payment)

      fetch('https://instrument-server.vercel.app/payment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ payment })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
           })


           fetch('https://instrument-server.vercel.app/payment/delete', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemsID:payment.itemsID }) 
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error('Error:', error);
            });





                       
            fetch('https://instrument-server.vercel.app/payment/classes', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({ favorites })
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })  

    }


  };


  return (
    <>
    <div className="w-[450px]">
      <form className='text-center lg:w-[450px] mx-auto' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn px-5 ' disabled={!stripe || !clientSecret || waiting}>
          Pay
        </button>
      </form>

    </div>

      {trnxId && <h1 className='mt-10 text-center' >Your tnxid is : <span className='text-red-600 font-semibold'>{trnxId}</span>  . <br /> Node it may be it need in future.</h1>
      }
     </>
  );
};
export default Checkout;