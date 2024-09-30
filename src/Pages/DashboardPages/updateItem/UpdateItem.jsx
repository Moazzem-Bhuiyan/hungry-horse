import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/sectiontitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiossecure";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, recipe, category, price, _id } = useLoaderData();

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            const menuitem = {
                name: data.recepiename,
                recipe: data.recepiedetails,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            };

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuitem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                alert('Update successful!');
            }
        }
        console.log(res.data);
    };

    return (
        <div>
            <section>
                <SectionTitle heading={'Update Item '} subheading={'Whats New '} />
            </section>

            <div>
                <form
                    className="bg-slate-50 py-20 px-10 space-y-5 "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label htmlFor="recipe">Recipe Name</label>
                        <input
                            defaultValue={name}
                            {...register("recepiename")}
                            className="w-full p-1 rounded-lg outline-none border"
                            placeholder="Enter Your recipe name"
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        <div>
                            <label>Category</label>
                            <br />
                            <select
                                defaultValue={category}
                                {...register("category")}
                                className="w-full p-1 rounded-lg outline-none border"
                            >
                                <option value="salad">Salad</option>
                                <option value="desert">Desert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="Price">Price*</label> <br />
                            <input
                                defaultValue={price}
                                {...register("price")}
                                className="w-full p-1 rounded-lg outline-none border"
                                type="number"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message">Recipe Details*</label>
                        <br />
                        <textarea
                            defaultValue={recipe}
                            {...register("recepiedetails")}
                            placeholder="Write your text"
                            className="w-full border outline-none rounded-md p-1 h-[200px]"
                        ></textarea>
                    </div>

                    <div>
                        <input
                            {...register("image")}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div>
                        <button
                            className="bg-orange-300 px-10 py-1 rounded-md text-lg font-bold"
                            type="submit"
                        >
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
``
