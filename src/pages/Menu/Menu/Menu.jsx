import { Helmet } from "react-helmet";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu"

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>henaz | Menu</title>
      </Helmet>

      <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
