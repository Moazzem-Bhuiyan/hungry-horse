const Menuitem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="lg:flex gap-10 md:p-0 p-3 my-3">
      <img
        style={{ borderRadius: "  0 200px 200px 200px " }}
        className=" w-[150px]  "
        src={image}
        alt=""
      />

      <div>
        <h1 className=" uppercase text-lg">{name}---------</h1>
        <p className="text-gray-400">{recipe}</p>
      </div>
      <p className="text-yellow-500 font-semibold"> ${price}</p>
    </div>
  );
};

export default Menuitem;
