import * as React from "react";
import { Link } from "gatsby";
import * as S from "./styles";

const Contact: React.FC = () => {
  return (
    <S.Contact>
      <S.Text>
        Get in touch with me to discuss opportunities{" "}
        <Link to="mailto:sally.northmore@gmail.com">via email</Link>.
      </S.Text>
      <S.Text>
        Connect with me on{" "}
        <Link to="https://github.com/sallynorthmore">Github</Link>.
      </S.Text>
      <S.Text>
        Connect with me on{" "}
        <Link to="https://www.linkedin.com/in/sallynorthmore/">LinkedIn</Link>.
      </S.Text>
    </S.Contact>
  );
};

export default Contact;
