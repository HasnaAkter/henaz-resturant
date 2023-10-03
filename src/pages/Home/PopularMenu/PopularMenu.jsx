import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../../components/MenuItems";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu,setMenu]=useState([])
  // useEffect(() =>{
  //     fetch('menu.json')
  //     .then(res => res.json())
  //     .then (data => {
  //         const popularItems = data.filter(item => item.category ==='popular')

  //         setMenu(popularItems)})
  // },[])
  return (
    <section className="mb-12">
      <SectionTitle
        heading="Form Our Menu"
        subHeading="Popular items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to="/menu">
        <div className="text-center">
          {" "}
          <button className=" btn btn-outline border-0 border-b-4 mt-4">
            View All Menu
          </button>
        </div>{" "}
      </Link>
    </section>
  );
};

export default PopularMenu;
