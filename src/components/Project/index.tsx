import React from "react";
// import Helmet from "react-helmet";
// import Banner from '../Banner';
// import ProjectLinks from '../ProjectLinks';
import * as S from "./styles";

export const Project = ({
  client,
  content,
  // contentComponent,
  date,
  description,
  // next,
  // previous,
  tags,
  title,
  // location,
}) => {
  // const PostContent = contentComponent || Content;

  return (
    <S.ProjectComponent>
      {/* <Helmet title={`Project: ${title}`} /> */}
      <S.ProjectBanner>
        {/* {location} */}
        {/* <Banner  /> */}
      </S.ProjectBanner>

      <S.Inner>
        <S.Header>
          <S.Title>
            {title}
            <S.Client>{client}</S.Client>
          </S.Title>
          <S.Description>{description}</S.Description>
        </S.Header>

        <S.Body>
          {content}

          <S.Date>{date}</S.Date>
          {tags && tags.length ? (
            <S.Tags>
              <S.Subtitle>Made with:</S.Subtitle>
              {tags.map((tag) => (
                <S.TagItem key={tag + `tag`}>
                  <S.TagLink>{tag}</S.TagLink>
                </S.TagItem>
              ))}
            </S.Tags>
          ) : null}
        </S.Body>
      </S.Inner>

      {/* <Nav>
				<ProjectLinks previous={previous} next={next} />
			</Nav> */}
    </S.ProjectComponent>
  );
};

export default Project;
