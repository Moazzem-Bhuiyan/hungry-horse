
import SectionTitle from "../../../component/sectiontitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiossecure";

const image_hosting_key =  import.meta.env. VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure =useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile ,{
        headers : {

            'Content-Type' : 'multipart/form-data'
        }
    })
    
    if(res.data.success){

        const menuitem = {

            name : data.recepiename,
            recipe: data.recepiedetails,
            image : res.data.data.display_url,
            category :data.category,
            price : parseFloat(data.price)
        }

        const menuRes = await  axiosSecure.post('/menu',menuitem)
        console.log(menuRes.data)
        if (menuRes.data.insertedId){

            // show popup
        }
    }
    console.log(res.data)
  };
  return (
    <div>
      <section className="mt-10">
        <SectionTitle
          subheading="What's New "
          heading={"Add Item"}
        ></SectionTitle>
      </section>

      {/* Form Section */}

      <div>
        <form
          className="bg-slate-50 py-20 px-10 space-y-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            {" "}
            <label htmlFor="recipe">Recepie Name</label>
            <input
              {...register("recepiename")}
              className=" w-full p-1 rounded-lg outline-none border bg-white "
              placeholder="Enter Your recipe name"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              {" "}
              <label>Category</label>
              <br />
              <select
                {...register("category")}
                className=" w-full p-1 rounded-lg  bg-white outline-none border "
              >
                <option value="salad">salad</option>
                <option value="desert">desert</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="pizza">Pizza</option>
              </select>
            </div>

            <div>
              {" "}
              <label htmlFor="Price">Price*</label> <br />
              <input
                {...register("price")}
                className=" w-full p-1 rounded-lg  bg-white outline-none border "
                type="number"
                id=""
              />
            </div>
          </div>

          <div>
            <label htmlFor="message">Recepie Details*</label>
            <br />
            <textarea
              {...register("recepiedetails")}
              placeholder="write your text"
              className=" w-full border outline-none  bg-white rounded-md p-1 h-[200px]"
            ></textarea>
          </div>

          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input  bg-white file-input-bordered w-full max-w-xs"
            />
          </div>

          <div className="">
            {" "}
            <button
              className="bg-orange-300 px-10 py-1 rounded-md text-lg font-bold"
              type="submit"
            >
              Add Item{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
