import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from './../../../Hooks/useCart';
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import moment from "moment";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)


  useEffect(() => {
    if (totalPrice) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          setClientSecret(res.data.clientSecret)
        })
    }
  }, [axiosSecure, totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    // conform payment 
    const { paymentIntent, error: paymentErr } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'Anonymous',
          name: user?.displayName || 'Anonymous'
        }
      }
    })
    if (paymentErr) {
      console.log(paymentErr)
    } else {
      if (paymentIntent.status === 'succeeded') {
        console.log(paymentIntent)
        const paymentInfo ={
          name:user?.displayName || 'Anonymous',
          email: user?.email || 'Anonymous',
          transactionId:paymentIntent.id,
          price:totalPrice,
          cartIds:cart.map(item=>item._id),
          menuIds:cart.map(item=>item.menuId),
          date:moment().format('LLL'),
          status:'Pending'
        }
        const res = await axiosSecure.post('/payment',paymentInfo);
        console.log(res.data)
        if(res.data.paymentResult.insertedId){
          Swal.fire({
            title: "Congress",
            text: `$ ${totalPrice} payment complete`,
            icon: "success"
          });
          refetch();
        }
      }
    }
  }

  return (
    <form className="border-2" onSubmit={handleSubmit}>
      <CardElement
        className="border-2 mr-3"
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary btn-sm" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;