import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiossecure";
import useCart from "../../../../hooks/useCart";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const CheckOutFom = () => {

    const stripe = useStripe ();
    const elements = useElements();
    const [error,setError]=useState('');
    const {user}=useContext(AuthContext);
    const navigate = useNavigate();

    const [clientSecter,setClientSecret]=useState('');
    const [transectionId, setTransectionId]=useState('')

    const axiosSecure = useAxiosSecure();
    const [cart,refetch]=useCart();

    const totalPrice = cart.reduce((total,item)=>total+item.price,0)

    useEffect(()=>{

        axiosSecure.post('/create-payment-intent',{price :totalPrice})

       .then(res=>{

        console.log(res.data.clientSecret)
        setClientSecret (res.data.clientSecret)

       })



    },[axiosSecure,totalPrice])



    const handleSubmit =async(event)=>{
        event.preventDefault();

        if(!stripe|| !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null){

            return;
        };

        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type : 'card',
            card
        })
        if(error){
            console.log('payment Error ',error)
            setError(error.message)

        }
        else{
            console.log('payment Method ',paymentMethod)
            setError('');
        }
        // confirm payment

        const {paymentIntent, error : confirmError } = await stripe.confirmCardPayment(clientSecter,{

            payment_method :{
                card : card,
                billing_details :{

                    email : user?.email||'anonymous',
                    name : user?.displayName||'anonymous'

                }
            }

        });

        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('paymentIntent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction Id' ,paymentIntent.id)
                setTransectionId (paymentIntent.id)
                
                const payment = {
                    email : user.email,
                    price : totalPrice,
                    transectionId : paymentIntent.id,
                    date : new Date(),
                    cartIds : cart.map(item=> item._id),
                    menuItemIds : cart.map(item=> item.menuId),
                    status :'pending'
                }

               const res = await axiosSecure.post('/payment',payment);

                console.log('payment saved ' ,res.data)

                refetch();
                navigate("/dashboard/paymentHistory")


            }
        }

    };


    return (

        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: 'black',
              '::placeholder': {
                color: 'black',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm bg-green-300 mt-10 ml-10 text-black px-10" type="submit" disabled={!stripe || ! clientSecter}>
        Pay
      </button>

      <p>{error}</p>
      {
      transectionId &&  <p className="text-green-500">Your transectionId : {transectionId}</p>
        }

    </form>
            
        </div>
    );
};

export default CheckOutFom;