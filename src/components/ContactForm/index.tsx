import React, { useState } from "react";
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

  return (
    <S.ContactForm>
      <S.Title>Get in touch to discuss opportunities!</S.Title>
      <S.Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
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
