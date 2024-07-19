import styled from 'styled-components';

export const ContactForm = styled.div`
  display: block;
  margin: 2rem auto;
  max-width: 34rem;
  width: 100%;
`;

export const Form = styled.form`
  display: block;
  margin: 0;
`;

export const Title = styled.div`
  color: #333;
  font-family: "Lato", sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  margin: 1rem auto 0 0;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;
`;

export const Label = styled.div`
  color: rgb(34, 34, 34);
  display: inline-block;
  font-family: "Lato", sans-serif;
  font-size: .75rem;
  font-weight: 900;
  letter-spacing: .08rem;
  line-height: 1.5rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  color: rgb(34, 34, 34);
  border-bottom: 2px solid rgb(34, 34, 34);
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  min-height: 2rem;
  padding: .25rem .5rem;
  margin: 1rem 0 0 -.5rem;
  display: relative;

  &:focus {
    box-shadow: 0 8px 6px -6px yellow;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  color: rgb(34, 34, 34);
  border-bottom: 2px solid rgb(34, 34, 34);
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75rem;
  width: 80%;
  min-height: 10rem;
  padding: .25rem .5rem;
  margin: 1rem 0 0 -.5rem;

  &:focus {
    box-shadow: 0 8px 6px -6px yellow;
    outline: none;
  }
`;

export const Button = styled.button`
  display: block;
  background: black;
  color: white;
  font-family: "Lato", sans-serif;
  font-size: .75rem;
  font-weight: 900;
  letter-spacing: .08rem;
  line-height: 1;
  text-transform: uppercase;
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: .25rem;
  margin: 2rem 0 0 -.5rem;
  width: 80%;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #333;
  }

  &:active {
    background: yellow;
    color: black;
  }
`;
