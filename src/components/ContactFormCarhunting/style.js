import styled from "@emotion/styled";

export const ContactFormCarHuntingContainer = styled.div`
width: 100%;
background-color: white;
padding: 40px;
padding-top: 80px;

.thank-you-message {
  display: none;
}

.thank-you-message.show {
  display: block;
  color: rgba(11, 31, 48, 1);
  text-align: center;
}


`

export const ContactServicesFormStyled = styled.form`
position: relative;
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-height: 320px;
max-width: 960px;
margin: 60px auto;
align-items: center;


.MuiFormControl-root {
    width: 50%!important;
    min-height: 80px;
}

.input-newsletter {
    width: 100%;
}
.MuiInput-root {
    width: calc(100% - 40px);
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
  border: 1px solid rgba(11, 31, 48, 1);
  padding: 4px 24px;
  border-radius: 4px;
  margin-top:1em;
  font-weight: 700;
  text-decoration: none;
  position: absolute;
  bottom: -20px;
  right: 50%;
  transform: translate(30%, 20px);
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



`

