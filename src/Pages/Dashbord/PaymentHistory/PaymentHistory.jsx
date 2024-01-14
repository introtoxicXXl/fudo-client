import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ['paymentHistory', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`)
      return res.data;
    }
  })
  console.log(user.email)

  return (
    <div>
      <SectionTitle heading="payment history" subHeading="At a Glance!" />
      <div className="w-4/5 mx-auto">
        <h1>Total Payment:{payments.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {
                payments.map((item, index) => <tr key={item._id}>
                  <th>{index+1}</th>
                  <td>{item.email}</td>
                  <td>{item.transactionId}</td>
                  <td>${item?.price}</td>
                  <td>{item?.status}</td>
                  <td>{item?.date}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;