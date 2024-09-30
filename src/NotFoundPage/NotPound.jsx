import { Link } from "react-router-dom";
import notf from "../assets/notf/image.png";

const NotPound = () => {
  return (
    <div>
      <div className="flex justify-center h-[80vh] items-center">
        <img src={notf} alt="" />
      </div>

      <div className="flex justify-center ">
        <Link
          className=" shadow-2xl border-b-2 border-sky-500 px-4 py-1 rounded-md btn"
          to="/"
        >
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotPound;
