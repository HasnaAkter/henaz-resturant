import Boxmodel from "../../Boxmodel/Boxmodel";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Boxmodel></Boxmodel>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;