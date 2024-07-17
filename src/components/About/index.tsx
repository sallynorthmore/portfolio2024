import * as React from "react";
import TypedText from "../TypedText";
import * as S from "./styles";

const About: React.FC = () => {
  return (
    <S.About>
      <TypedText />
      <S.Text>
        I make beautiful, user-friendly applications with stable, scalable code.
        With over 10 years of studio, agency, and start-up experience delivering
        world class digital experiences. I love building scalable, clean
        software, engineering teams and driving process.
      </S.Text>
    </S.About>
  );
};

export default About;
