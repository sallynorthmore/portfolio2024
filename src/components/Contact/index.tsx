import * as React from "react";
import { Link } from "gatsby";
import ContactForm from "../ContactForm"
import * as S from "./styles";

const Contact: React.FC = () => {
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
      <ContactForm />
    </S.Contact>
  );
};

export default Contact;
