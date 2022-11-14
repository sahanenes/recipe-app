import React, { useState } from "react";
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
import { SignInuser } from "../../auth/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = {
    username: "admin",
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    SignInuser(email, password, navigate);
    console.log(email, password);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
