import { Helmet } from "react-helmet";
import Carousel from "./Banner/Banner";
import Popular from "./PopularClass/Popular";
import PopularClass from "./PopularClass/PopularClas";
// import CarouselBanner from "./Banner/Banner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Summer Camp || Home</title>
            </Helmet>
    <Carousel></Carousel>
    <Popular></Popular>
    <PopularClass></PopularClass>
        
        </>
    );
};

export default Home;