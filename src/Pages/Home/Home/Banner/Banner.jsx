
import guiter from '../../../../assets/guiter/guiter.jpg'
import viloine from '../../../../assets/vilolin/viloine.jpg'
import piano from '../../../../assets/Piano/piano-girl.jpg'
import flute from '../../../../assets/flute/fliute.webp'
import guiter2 from '../../../../assets/guiter/guiterplay2.jpg'





const Carousel = () => {
    return (
<>
<div className="carousel w-full mt-10  rounded-xl">
  <div id="slide5" className="carousel-item relative w-full">
    <img src={guiter2} className="w-full lg:w-11/12 mx-auto md:h-3/4 rounded-xl"  />
    
    <div className='absolute mx-auto text-sky-400 text-4xl lg:top-72 max-lg:top-32 left-32'>

<h2>Welome <br />
to our Music World</h2>
<p className="text-blue-600 text-md mt-4 text-lg">We Provide best teacher to learn any music instrument </p>
   <p className="text-blue-700 text-md  text-lg"> Play musicand  Enjoy the life </p> 
   <p className="text-blue-800 text-md  text-lg">Make Mermoey and be heppy in life by music</p> 
    </div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide1" className="carousel-item relative w-full">
    <img src={guiter} className="w-full lg:w-8/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
<img src={viloine} className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={piano} className="w-full lg:w-10/12 mx-auto md:h-3/4 rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={flute} className="w-full lg:w-11/12 mx-auto md:h-3/4 rounded-xl"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</>    

);
};

export default Carousel;