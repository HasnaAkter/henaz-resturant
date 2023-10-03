import Boxmodel from "../../Boxmodel/Boxmodel";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonials/Testimonial";
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div>
              <Helmet><title>henaz | Home</title></Helmet>
           <Banner></Banner>
           <Category></Category>
           <Boxmodel></Boxmodel>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;