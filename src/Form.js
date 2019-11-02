import React from "react";
import Features from "./Features";

const Form = props => {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Features {...props} />
    </form>
  );
};

export default Form;
