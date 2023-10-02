import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured item"
      ></SectionTitle>
      <div className="md: flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md: ml-10">
          <p>Aug 20, 2029</p>

          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            nesciunt magnam, necessitatibus tenetur sequi adipisci.
            Exercitationem temporibus nesciunt consequatur id amet nulla
            veritatis at quibusdam repellat, repudiandae, officia debitis
            pariatur?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
