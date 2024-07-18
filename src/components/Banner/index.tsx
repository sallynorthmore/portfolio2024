import * as React from "react";
import { Link } from "gatsby";
import * as S from "./styles";

const Banner: React.FC = ({title}) => {
  return (
    <S.BannerComponent>
      <S.Title>
        <Link to="/">{title}</Link>
      </S.Title>
      <S.Links role="navigation">
        <S.Link to="/#work">Work</S.Link>
        <S.Link to="/#contact">Contact</S.Link>
      </S.Links>
    </S.BannerComponent>
  );
};

export default Banner;
