import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const { data: items = [], refetch } = useQuery({
    queryKey: ['manageItems'],
    queryFn: async () => {
      const res = await axiosPublic.get('/menu')
      return res.data;
    }
  })

  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`menu/admin/${item._id}`)
          .then(res => {
            refetch();
            Swal.fire({
              title: "Congratulation",
              text: `${item.name} is delete`,
              icon: "success"
            });
          })
      }
    });
  }

  return (
    <div>
      <SectionTitle heading="manage all items" subHeading="Hurry Up" />
      <div className="w-4/5 mx-auto space-y-3">
        <h1 className="text-2xl font-semibold">Total Items: {items.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{item.category}</span>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <Link to={`/dashboard/manageItems/updateItems/${item._id}`}>
                      <button className="btn bg-[#D1A054] hover:bg-[#af813c]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg></button>
                    </Link>
                  </th>
                  <th>
                    <button onClick={() => handleDelete(item)} className="btn btn-ghost text-red-600 btn-outline btn-error"><FaTrashAlt /></button>
                  </th>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;