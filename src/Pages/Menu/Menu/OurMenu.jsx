import SectionTitle from "../../../component/sectiontitle/SectionTitle";
import useHooks from "../../../hooks/useHooks";

import Menucategory from "../Menucategory/Menucategory";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
import saladimg from "../../../assets/menu/salad-bg.jpg";
import pizzaimg from "../../../assets/menu/pizza-bg.jpg";
import soupimg from "../../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [menu] = useHooks();
  // const popularitem = menu.filter(item=> item.category==='popular' )
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <div className="contact">
        <div className="text  bg-black p-20 px-52 bg-opacity-60 space-y-5">
          <h1 className="text-4xl font-bold uppercase">our menu</h1>
          <p className=" uppercase">would you like to dry dish</p>
        </div>
      </div>

      {/* offerdd section */}
      <section className="mt-10">
        {" "}
        <SectionTitle
          subheading={"don't Miss"}
          heading={"TO days Offer"}
        ></SectionTitle>
      </section>

      <Menucategory items={offered}></Menucategory>

      {/* dessertitem */}
      <Menucategory
        items={dessert}
        img={dessertimg}
        title={"dessert"}
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit."
      ></Menucategory>

      {/* fizza item=----------- */}

      <Menucategory
        items={pizza}
        title="pizza"
        img={pizzaimg}
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, enim."
      ></Menucategory>

      {/* saladsitem-------------- */}

      <Menucategory
        items={salad}
        title="salad"
        img={saladimg}
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, enim."
      ></Menucategory>

      {/* soupItem...------------ */}

      <Menucategory
        items={soup}
        img={soupimg}
        title="soup"
        des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, enim."
      ></Menucategory>
    </div>
  );
};

export default OurMenu;
