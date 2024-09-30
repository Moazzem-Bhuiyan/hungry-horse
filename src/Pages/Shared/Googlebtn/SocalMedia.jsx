import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const SocalMedia = () => {

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();

    const {googleSignIn}= useContext(AuthContext);

    const handleGoogle  = () => {

        googleSignIn ()
        .then(result=>{
            console.log(result.user)
            const userinfo = {
                email : result.user?.email,
                name : result .user.displayName
            }

            axiosPublic.post ('/users',userinfo )
            .then(res=>{
                console.log(res.data)
            })
            


            navigate('/')
        })


    }

    
    return (
        <div>

            <button onClick={handleGoogle} className=" border-2 border-sky-400 flex gap-2  items-center w-full justify-center mt-2 p-1 rounded-md"> <FaGoogle className="text-blue-800"></FaGoogle> SignIn With Google</button>
            
        </div>
    );
};

export default SocalMedia;