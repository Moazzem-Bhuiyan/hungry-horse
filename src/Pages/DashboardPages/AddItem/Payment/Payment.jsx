import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../component/sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFom from "./checkOutFom";

// TODO-------
const stripePromise = loadStripe( import.meta.env.VITE_API_KEYS)
const Payment = () => {


    return (
        <div>

            <section> <SectionTitle heading={'Payment pls'} subheading={'Whats Looking '}></SectionTitle></section>

            <div>
                <Elements stripe={stripePromise}>

                    <CheckOutFom></CheckOutFom>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;