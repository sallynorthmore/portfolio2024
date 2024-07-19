import React, { useState } from "react";
import { Link } from "gatsby";
import ContactForm from "../ContactForm";
import * as S from "./styles";

const Contact: React.FC = () => {


  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Thank you for your submission"))
      .catch((error) => alert(error));
  };

  return (
    <S.Contact>
      <S.Text>
        Connect with me on{" "}
        <Link to="https://github.com/sallynorthmore">Github</Link>.
      </S.Text>
      <S.Text>
        Connect with me on{" "}
        <Link to="https://www.linkedin.com/in/sallynorthmore/">LinkedIn</Link>.
      </S.Text>
      <ContactForm onSubmit={handleSubmit} />
    </S.Contact>
  );
};

export default Contact;
