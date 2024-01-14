import { FaDollarSign, FaProductHunt, FaUsers } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { useQuery } from '@tanstack/react-query';
import useAuth from './../../../Hooks/useAuth';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data:stats } = useQuery({
    queryKey: ['admin-stat'],
    queryFn: async () => {
        const res = await axiosSecure.get('/admin-stat')
        return res.data;
    }
  })
  console.log(stats)
  return (
    <div className="my-10">
      <div className="w-4/5 mx-auto">
      <h1 className="text-3xl font-bold my-5">Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}</h1>
        <div className="stats shadow flex">

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-3xl"/>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">{stats?.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"/>
            </div>
            <div className="stat-title">Customer</div>
            <div className="stat-value">{stats?.customer}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
            <FaProductHunt className="text-3xl"/>
            </div>
            <div className="stat-title">Products</div>
            <div className="stat-value">{stats?.products}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
            <CiDeliveryTruck className="text-4xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats?.order}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminHome;