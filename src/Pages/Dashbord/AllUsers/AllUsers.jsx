import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: user = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data;
    }
  })


  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/admin/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }
  const handleMakeAdmin = user => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make him admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`)
          .then(res => {
              refetch();
              Swal.fire({
                title: "Congratulation",
                text: `${user.name} is admin now`,
                icon: "success"
              });
          })
      }
    });
  }

  return (
    <div className="px-10">
      <SectionTitle heading='manage all users' subHeading="How Many" />
      <div className="bg-gray-200 py-10 rounded-lg space-y-6 px-5">
        <div className="text-4xl font-bold">
          <h1>Total Order:{user.length}</h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((item, index) => <tr key={item._id}>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      {item?.name}
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                      {
                        item.role === 'Admin' ? "Admin" : <button onClick={() => handleMakeAdmin(item)} className="btn btn-outline btn-warning"><FaUser /></button>
                      }
                    </td>
                    <th>
                      <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-600 btn-outline btn-error"><FaTrashAlt /></button>
                    </th>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;