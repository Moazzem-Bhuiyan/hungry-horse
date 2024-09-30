import Foodcard from "./Foodcard";

const OrderCategory = ({ items }) => {
  return (
    <div>
      <div className=" grid lg:grid-cols-3 gap-10 justify-center items-center">
        {items.map((card, index) => (
          <Foodcard key={index} items={card}></Foodcard>
        ))}
      </div>
    </div>
  );
};

export default OrderCategory;
