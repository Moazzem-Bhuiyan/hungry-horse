import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useHooks from "../../hooks/useHooks";
import OrderCategory from "./OrderCategory";
import { useParams } from "react-router-dom";

const OurOrder = () => {
  // path er sathe sathe jate route e o access hy erjnno etaaa

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  // path er sathe sathe jate route e o access hy erjnno etaaa

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useHooks();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <div className="contact">
        <div className="text  bg-black p-20 md:px-52 px-20 bg-opacity-60 space-y-5">
          <h1 className="text-4xl font-bold uppercase">our Order</h1>
          <p className=" uppercase">would you like to dry dish</p>
        </div>
      </div>

      {/* tabs------------ */}

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          {" "}
          <OrderCategory items={salad}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={pizza}></OrderCategory>{" "}
        </TabPanel>
        <TabPanel>
          <OrderCategory items={soup}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={dessert}></OrderCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurOrder;
