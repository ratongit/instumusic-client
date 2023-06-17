import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import usefavorites from "../Hooks/usefavorites";
import Checkout from "./ChickOut";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GAT_WAY)
const Payment = () => {

    const [favorites]=usefavorites()


    const total= favorites.reduce((sum,item)=>item.coursePrice
    +sum,0)
const price= parseFloat(total.toFixed(2))
    // console.log(price)



    return (<div>
            <h1 className="text-3xl text-blue-500  text-center">Welcome to payment pages <br />
         <span className="text-pink-500 font-bold uppercase my-10">please pay only - <span className="text-yellow-300">$ {price}</span></span>   </h1>

         <div className="my-10 border-sky-300 border-2 p-5 rounded-lg">

        <Elements stripe={stripePromise}>
<Checkout price={price}></Checkout>

        </Elements>
        </div>
         </div>
    );
};

export default Payment;