import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_Api_Key = import.meta.env.VITE_IMAGE_BB_API_KEY;
const image_Api = `https://api.imgbb.com/1/upload?key=${image_Api_Key}`;

const AddItems = () => {
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
      const menuInfo = {
        name: data.name,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category
      }
      const result = await axiosSecure.post('/menu', menuInfo)
      if (result.data.insertedId) {
        Swal.fire({
          title: "Congress",
          text: `${data.name} is added`,
          icon: "success"
        });
      }
    }

  }

  return (
    <div>
      <SectionTitle heading="add an item" subHeading="What's new?" />
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
                defaultValue='default'
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
          <button className="btn btn-outline" type="submit">Add Item <ImSpoonKnife className="" /></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;