import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const Container = styled(Flex)`
  border: 2px solid #112cb0;
  width: 80%;
  height: 80vh;
  margin: auto;
  margin-top: 1rem;
  flex-direction: column;
  border-radius: 20px;
`;

export const Header = styled(Flex)`
  border: 2px solid #e1f1de;
  width: 50%;
  margin-bottom: 2rem;
  border-radius: 10px;
  background-color: #e1f1de;
`;
export const Info = styled.div`
  width: 60%;
  text-align: center;
  background-color: #e1f1de;
`;
