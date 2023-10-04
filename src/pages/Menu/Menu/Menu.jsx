import { Helmet } from "react-helmet";
import Cover from "../../Home/Home/Shared/Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>henaz | Menu</title>
      </Helmet>

      <Cover img={menuimg} title="our menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* <PopularMenu></PopularMenu> */}
      {/* <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuimg} title="our menu"></Cover>
      <PopularMenu></PopularMenu> */}

      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory items={dessert} title="dessert" img={dessertimg}></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaimg}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladimg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupimg}></MenuCategory>
    </div>
    
  );
};

export default Menu;
