import { useEffect, useState } from "react";
import SectionTitle from "../../../component/sectiontitle/SectionTitle";
import { Carousel } from "react-responsive-carousel";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const Testomonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://final-project-serversite.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section>
        {" "}
        <SectionTitle
          subheading={"What Our Clients Say"}
          heading={"Testomonial"}
        ></SectionTitle>{" "}
      </section>

      <div>
        <Carousel className="py-5 space-y-6 mb-5">
          {reviews.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center my-5">
                {" "}
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
              </div>

              <div className="flex justify-center">
                <i className="text-5xl">
                  <BsChatSquareQuoteFill />
                </i>
              </div>
              <p className="my-5">{item.details}</p>
              <h1 className="text-3xl mb-10 font-semibold text-orange-400">
                {item.name}
              </h1>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testomonial;
