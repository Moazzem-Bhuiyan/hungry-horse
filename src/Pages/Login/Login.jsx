import { useContext, useEffect, useRef, useState } from "react";
import "../Login/Login.css";
import authpic from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SocalMedia from "../Shared/Googlebtn/SocalMedia";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(3); // Captcha load hocche ekhane
  }, []);

  const handlevalid = (event) => {
    event.preventDefault(); // Prevent form submission
    const user_captcha_value = captchaRef.current.value;

    console.log("User Captcha Input:", user_captcha_value);

    const isValidCaptcha = validateCaptcha(user_captcha_value);
    console.log("Is Captcha Valid:", isValidCaptcha);

    if (isValidCaptcha) {
      setDisabled(false); // Should enable button
    } else {
      setDisabled(true); // Button remains disabled
    }
  };

  // UseEffect to track the state changes
  useEffect(() => {
    console.log("Is Button Disabled:", disabled);
  }, [disabled]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "Logged SuccessFull",
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
        },
      });

      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login h-screen lg:h-[100vh] p-10  px-[10px]">
      <div className="grid lg:grid-cols-2 lg:py-36">
        <div>
          <img src={authpic} alt="Authentication" />
        </div>

        <div className=" px-2 lg:px-[100px]">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-semibold text-center">Please Login</h1>

            <label className="text-lg mb-1" htmlFor="email">
              Email*
            </label>
            <br />
            <input
              className="w-full py-2 px-1 bg-transparent border-2 border-black rounded-md outline-none"
              type="email"
              id="email"
            />

            <br />

            <label className="text-lg mb-1" htmlFor="password">
              Password*
            </label>
            <br />
            <input
              className="w-full bg-transparent border-2 border-black py-2 px-1  rounded-md outline-none"
              type="password"
              id="password"
            />

            <br />

            <label htmlFor="captcha">
              <LoadCanvasTemplate />
            </label>

            <input
              ref={captchaRef}
              className="w-full py-2 px-1 bg-transparent border-2 border-black rounded-md outline-none"
              type="text"
              id="captcha"
            />

            <div className="flex justify-center mt-10">
              <button
                onClick={handlevalid}
                className="bg-orange-300 w-full py-1 text-white rounded-md px-10"
              >
                Valid
              </button>
            </div>

            <button
              disabled={disabled}
              className="w-full py-2 px-1 mt-2 bg-black text-white border rounded-md outline-none"
            >
              Sign In
            </button>
          </form>
          <p>
            <small> New Here ?</small>{" "}
            <Link className="text-blue-500" to="/signup">
              Create New Account
            </Link>{" "}
          </p>
          <hr />

          <SocalMedia></SocalMedia>
        </div>
      </div>
    </div>
  );
};

export default Login;
