
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocalMedia from "../Shared/Googlebtn/SocalMedia";
import { Link,  useNavigate } from "react-router-dom";


const SignUP = () => {
    const {createUser}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()

      
  const onSubmit = (data) =>
     {

        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)

            const userinfo = {
              email : data.email
            }

            axiosPublic.post('/users',userinfo)

            .then( res=>{

              if (res.data.insertedId){
                console.log('user added data base ')

                navigate('/')
              }


            }

            )
        })

    }
    



    return (


        <div>

<div className="hero login bg-base-200 min-h-screen">
  <div className="">
    
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-10 text-center"> Please SignUp Now </h1>
    </div>

    <div className="card w-[400px] p-2 py-10 px-5 shrink-0 shadow-2xl">

      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-black">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} placeholder="Name" name="name" className="input bg-white input-bordered"  />

          {errors.name && <span>Thisss field is required</span>}

        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black ">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input bg-white input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-black">Password</span>
          </label>
          <input type="password" {...register("password")} placeholder="password" className="input bg-white input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover  text-black ">Forgot password?</a>
          </label>
          <p>Already have an account ? <Link to ='/login'><span className="text-blue-500">Go to login </span></Link> </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-400 text-white">SignUp</button>
        </div>
      </form>
      <SocalMedia></SocalMedia>
    </div>
  </div>
</div>
            
        </div>
    );


};


export default SignUP;