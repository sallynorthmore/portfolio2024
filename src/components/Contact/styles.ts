import styled from 'styled-components';

export const Contact = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 4vw;
`;

export const Text = styled.p`
  color: #333;
  font-family: "Lato", sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  margin: 1rem auto 0 0;
  max-width: 50rem;
  padding: 0 2vw;

  a {
    color: rgb(225, 72, 61);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`
