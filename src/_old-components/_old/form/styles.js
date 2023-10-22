import styled from "styled-components";


export const Form = styled.form`


  width: 60%;
  margin: 25px auto;
  padding: 20px;

  background-color: ${({theme}) => theme.colors.secondaryBackground};
  border-radius: 10px;


.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 7px;
  color: ${({theme}) => theme.colors.secondaryText};
}

.form-input {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: ${({theme}) => theme.colors.background};
  color: #333;
  inset: unset;
  border: 0.1px solid transparent;
  outline: none;
  border-radius: 5px;
}

.form-input:hover{
    border-color: ${({theme}) => theme.colors.secondary};
}
.form-input:focus{
    border-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.text};
}

textarea.form-input {
  height: 100px;
  font-size: 14px;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}

.form-button:hover {
  background-color: ${({theme}) => theme.colors.secondary};
}

`