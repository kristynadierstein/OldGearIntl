import styled from "@emotion/styled";
import { theme } from "../../styles";

export const NewsletterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;
export const NewsletterModuleStyled = styled.div`
  background-color: #e9b548;
  width: 100%;
  min-height: 500px;
  padding: 40px;
  padding-top: 80px;
  padding-bottom: 140px;
  taext-align: center;

  h2 {
    margin: 0 auto;
    text-align: center;
  }

  img {
    width: 200px;
    margin-top: 40px;
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .thank-you-message {
      display: none;
  }

  .thank-you-message.show {
      display: block;
      color: rgba(11, 31, 48, 1);
  }

  .MuiInputBase-input {
    border: 0 !important;
    color: rgba(11, 31, 48, 1) !important;
    border-bottom: 2px solid rgba(11, 31, 48, 1) !important;
    margin-bottom: 20px;
  }

  .MuiInput-underline:before {
    display: none !important;
  }

  button {
    border: none;
    background: transparent;
    color: rgba(11, 31, 48, 1);
    font-weight: 700;
    text-decoration: underline;
  }

  button:focus {
    outline: none;
  }

  .MuiInputBase-root:focus-visible {
    outline: none;
  }

  .MuiInputBase-input:focus-visible {
    outline: none;
  }

  .MuiInput-underline:after {
    display: none;
  }

  input:-internal-autofill-selected {
    background-color: none !important;
  }
  /* Change the white to any color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  /*Change text in autofill textbox*/
  input:-webkit-autofill {
    -webkit-text-fill-color: rgba(11, 31, 48, 1) !important;
  }
`;
