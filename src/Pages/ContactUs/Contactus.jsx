
import "../../../src/Pages/ContactUs/contact.css";
import SectionTitle from "../../component/sectiontitle/SectionTitle";
import robot from "../../assets/robot/robot.png";

const Contactus = () => {
  const card = [
    {
      icon: "📞",
      name: "PHONE",
      nmbr: "1820921814",
    },
    {
      icon: "⛪",
      name: "ADDRESS",
      nmbr: "1820921814",
    },
    {
      icon: "🕔",
      name: "WORKING HOURS",
      nmbr: " Mon -fri 08:00-22:00",
    },
  ];
  return (
    <div>
      <div className="contact">
        <div className="text  bg-black p-20 px-52 bg-opacity-60 space-y-5">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className=" uppercase">would you like to dry dish</p>
        </div>
      </div>
      <section className="my-10">
        {" "}
        <SectionTitle
          subheading={"visit us"}
          heading={"our location"}
        ></SectionTitle>
      </section>

      <div className="  h-[400px] flex items-center justify-center">
        <div className="grid lg:grid-cols-3 gap-10">
          {card.map((card,index) => (
            <div key={index} className="bg-slate-50 w-80 h-48 border pb-5 shadow-2xl">
              <h1 className="text-center w-full shadow-lg bg-yellow-500 py-2 text-2xl ">
                {card.icon}
              </h1>
              <div className=" bg-slate-100 h-32  shadow-2xl mx-4 rounded-b-md pt-10">
                <h1 className="text-center text-xl font-bold mb-2">
                  {card.name}
                </h1>
                <h1 className="text-center">{card.nmbr}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <section className=" sm:mt-80 lg:my-10">
        {" "}
        <SectionTitle
          subheading={"send us a massage"}
          heading={"contact form"}
        ></SectionTitle>
      </section>

      <form className="bg-slate-50 py-20 px-10 space-y-5 ">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            {" "}
            <label htmlFor="Name">Name*</label> <br />
            <input
              className="w-full p-1 rounded-lg outline-none border "
              type="text"
              name="name"
              id=""
              placeholder="Enter your name "
            />
          </div>

          <div>
            {" "}
            <label htmlFor="Name">Email*</label> <br />
            <input
              className=" w-full p-1 rounded-lg outline-none border "
              type="email"
              name="name"
              id=""
              placeholder="Enter your email "
            />
          </div>
        </div>

        <div>
          {" "}
          <label htmlFor="Phone">Phone*</label>
          <input
            className=" w-full p-1 rounded-lg outline-none border "
            type="text"
            name="phone"
            id=""
            placeholder="Enter Your Phonr number"
          />
        </div>

        <div>
          <label htmlFor="message">Message*</label>
          <br />
          <textarea
            placeholder="write your text"
            name="messsage"
            id=""
            className=" w-full border outline-none rounded-md p-1 h-[200px]"
          ></textarea>
        </div>

        <div className=" flex border w-80 p-2 py-4 ">
          {" "}
          <input className="w-12 h-6" type="checkbox" name="" id="" />{" "}
          <span className="text-xl">I am not a robot</span>
          <img className="w-10 ml-10" src={robot} alt="" />
        </div>

        <div className="flex justify-center">
          {" "}
          <input
            className="bg-yellow-700 cursor-pointer text-white text-2xl font-semibold px-10 py-2"
            type="submit"
            value="Send Message"
          />{" "}
        </div>
      </form>
    </div>
  );
};

export default Contactus;
