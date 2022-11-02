import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userInfo = {
    username: "admin",
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="Username" type="text" />
          <StyledInput placeholder="Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
