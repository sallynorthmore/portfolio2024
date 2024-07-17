import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';


export const BannerComponent = styled.header`
	background: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	justify-content: space-between;
	left: 0;
	height: 5rem;
	max-height: 4rem;
	padding: 1rem 4vw 0;
	position: fixed;
	transition: 240ms all ease-in;
	top: 0;
	width: 100%;
	z-index: 1;
`;

export const Title = styled.div`
	color: rgb(34, 34, 34);
	font-size: 13px;
	font-weight: 900;
	letter-spacing: 0.1em;
	line-height: 1.3;
	text-transform: uppercase;

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Links = styled.nav`
  display: flex;
`;

export const Link = styled(GatsbyLink)`
  color: rgb(34, 34, 34);
  display: inline-block;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.1em;
  line-height: 1.3;
  margin: auto auto auto 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
