import React, { useEffect, useState } from "react";
import * as S from "./styles";

const ContactForm: React.FC = ({ onSubmit }) => {
    const initialFormData = {
      name: "",
      email: "",
      message: "",
    };

  const [formData, setFormData] = useState(initialFormData);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    onSubmit(event);
    // Clear the form
    setFormData(initialFormData);
  }

  return (
    <S.ContactForm>
      <S.Title>Get in touch to discuss opportunities!</S.Title>
      <S.Form
        data-netlify="true"
        method="post"
        name="contact"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
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
