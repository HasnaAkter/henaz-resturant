import { Link } from "react-router-dom";
import MenuItems from "../../../components/MenuItems";
import Cover from "../../Home/Home/Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="p-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to= {`/order/${title}`}>
        
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
