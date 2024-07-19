import React, { useState } from "react";
import { navigate } from "gatsby";
import * as S from "./styles";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <S.ContactForm>
      <S.Title>Get in touch to discuss opportunities!</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.FormItem>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </S.FormItem>
        <S.FormItem>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </S.FormItem>
        <S.FormItem>
          <S.Label htmlFor="message">Message:</S.Label>
          <S.TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </S.FormItem>
        <S.Button type="submit">Submit</S.Button>
      </S.Form>
    </S.ContactForm>
  );
};

export default ContactForm;

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

// class ContactForm extends React.Component {
//   state = { name: "", email: "", message: "" };

//   handleSubmit = (e) => {
//     this.props.dispatch(
//       {
//         type: "SEND_CONTACT_FORM",
//         contactName: this.state.name,
//       },
//       { type: " LOG_VISIT" }
//     );

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": "contact",
//         ...this.state,
//       }),
//     })
//       .then(() =>
//         navigate("/", {
//           state: { isContact: true, contactName: this.state.name },
//         })
//       )
//       .catch((error) => console.log(error));

//     e.preventDefault();
//   };
