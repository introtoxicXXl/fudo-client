import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { ImSpoonKnife } from "react-icons/im";


const image_Api_Key = import.meta.env.VITE_IMAGE_BB_API_KEY;
const image_Api = `https://api.imgbb.com/1/upload?key=${image_Api_Key}`;


const UpdateItems = () => {
    const item = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageInfo = { image: data.image[0] };
        const res = await axios.post(image_Api, imageInfo, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const updateInfo = {
                name: data.name,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category
            }
            const result = await axiosSecure.patch(`/menu/${item._id}`, updateInfo)
            if (result.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Congress",
                    text: `${data.name} is Update`,
                    icon: "success"
                });
            }
        }

    }

    return (
        <div>
            <SectionTitle heading="update item" subHeading="Hurry Up" />
            <div className="w-2/3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            className="input input-bordered w-full"
                            {...register('name')}
                            defaultValue={item.name}
                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600 mt-1" role="alert">Recipe name is required *</p>
                        )}
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select
                                defaultValue={item.category}
                                className="select select-bordered"
                                {...register('category')}
                            >
                                <option disabled value='default'>Select a category</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="desert">Desert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe name*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Price"
                                className="input input-bordered w-full"
                                {...register('price')}
                                defaultValue={item.price}
                            />
                            {errors.price?.type === "required" && (
                                <p className="text-red-600 mt-1" role="alert">Price is required *</p>
                            )}
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details"
                            {...register('recipe')}
                            defaultValue={item.recipe}
                        ></textarea>
                        {errors.recipe?.type === "required" && (
                            <p className="text-red-600 mt-1" role="alert">recipe is required *</p>
                        )}
                    </label>
                    <input
                        type="file"
                        className="file-input w-full"
                        {...register('image')}
                    />
                    {errors.image?.type === "required" && (
                        <p className="text-red-600 mt-1" role="alert">Select an image*</p>
                    )}
                    <button className="btn btn-outline" type="submit">Update Item <ImSpoonKnife className="" /></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;