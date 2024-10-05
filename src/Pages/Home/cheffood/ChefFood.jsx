import SectionTitle from "../../../component/sectiontitle/SectionTitle";

const ChefFood = () => {
  const card = [
    {
      img: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-4-370x247.jpg",
      name: "Caeser Salad",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem.",
    },
    {
      img: "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg",
      name: "Caeser Salad",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem.",
    },
    {
      img: "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg",
      name: "Caeser Salad",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, autem.",
    },
  ];

  return (
    <div>
      <section>
        <SectionTitle
          subheading={"Should Try"}
          heading={"chef recommends"}
        ></SectionTitle>
      </section>

      <div className=" grid lg:grid-cols-3 gap-10 justify-center items-center">
        {card.map((card, index) => (
          <div
            key={index}
            className=" shadow-xl rounded-xl my-10 p-2 space-y-2 justify-center"
          >
            <img className="w-full" src={card.img} alt="" />
            <h1 className="text-center text-2xl">{card.name}</h1>
            <p className="text-center text-gray-400">{card.des}</p>

            <div className="flex justify-center">
              <button className=" md:w-1/2  my-3 bg-white shadow-2xl rounded-lg border-b-2 border-black hover:bg-gray-400 hover:text-white">
                {" "}
                Add To Cart{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefFood;
