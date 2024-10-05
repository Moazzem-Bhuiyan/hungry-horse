import featured from "../../../assets/home/featured.jpg";
import "../../Home/Featured/featured.css";

const Featured = () => {
  return (
    <div className="featured py-5 my-10">
      <div className="text-center p-1 mx-auto bg-black bg-opacity-50">
        <p className="text-yellow-500">--- Check it out --- </p>
        <h1 className="text-3xl uppercase border-y-2 w-1/4 m-auto  my-3 py-2 text-white text-center">
          From our menu
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 bg-black bg-opacity-50 py-10 sm:p-10">
        <div className="">
          {" "}
          <img className="w-[60%] m-auto" src={featured} alt="" />
        </div>

        <div className=" items-center justify-center p-5 md:p-0 mt-10 text-white">
          <h3>March 20, 2023</h3>
          <h3>WHERE CAN I GET SOME?</h3>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </h3>
          <button className="md:w-1/2 w-full my-3  py-1 text-black bg-white shadow-2xl rounded-lg border-b-2 border-black hover:bg-gray-400 hover:text-white">
            {" "}
            Add To Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
