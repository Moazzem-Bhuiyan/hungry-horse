import React from "react";
import Menuitem from "../../Shared/menuitem/Menuitem";
import { Link } from "react-router-dom";
import ItemCover from "../../Shared/ItenCover/ItemCover";

const Menucategory = ({ items, title, img, des }) => {
  return (
    <div>
      {title && <ItemCover img={img} title={title} des={des}></ItemCover>}

      <div className="grid lg:grid-cols-2 gap-10 mb-10 mt-10">
        {items.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>

      <Link to={`/ourorder/${title}`}>
        {" "}
        <div className=" flex justify-center ">
          {" "}
          <button className=" uppercase shadow-md text-center my-10 bg-white w-2/6 rounded-lg py-1 border-b-4 border-black">
            Order Your FAVOURITE Food
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Menucategory;
