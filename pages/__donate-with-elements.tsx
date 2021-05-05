import { Elements } from "@stripe/react-stripe-js";
import { NextPage } from "next";
import ElementsForm from "../components/commerce/ElementsForm";
import getStripe from "../utils/get-stripejs";

const DonatePage: NextPage = () => {
  return (
    <>
      <div className="page-container">
        <h1>Donate with Elements</h1>
        <p>Donate to our project 💖</p>
        <Elements stripe={getStripe()}>
          <ElementsForm />
        </Elements>
      </div>
    </>
  );
};

export default DonatePage;
