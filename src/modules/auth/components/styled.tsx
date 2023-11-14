import { _colors } from "@/constants";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const MainAuthContainer = styled(Row)`
  width: 100vw;
  height: 100vh;
`;

export const ImageContainer = styled(Col)`
  padding: 0 !important;
  height: 100vh;
`;

export const AuthImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  @media (max-width: 992px) {
    height: 50vh;
  }
`;

export const FormContainer = styled(Col)`
  display: flex;
  align-items: center;
  padding: 0 !important;
  justify-content: center;
  @media (max-width: 992px) {
    padding-bottom: 1rem !important;
  }
`;

export const FormInput = styled.input`
  padding: 13px 10px;
  border: none;
  transition: 0.2s ease 0s;
  background-color: #ecf0f1;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-bottom-color: #bdc3c7;
  }
`;

export const FormInputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const ErrorMessage = styled.code`
  color: #eb4d4b;
  margin-top: 10px;
`;

export const FormLink = styled(Link)`
  text-align: center;
  width: 100%;
  display: block;
  text-decoration: underline;
`;

export const FormMain = styled.div`
  width: 90%;
  margin: auto;
  max-width: 400px;
`;

export const FormTitle = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  color: #222f3e;
`;

export const FormInputContainer = styled.div`
  display: flex;
  width:100%:
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: auto !important;
  background-color: ${_colors.red.secondary};
  padding: 10px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  border: none;
`;

export const LoadingScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #130f40;
`;

export const LoadingContainer = styled.div`
  text-align: center;
`;

export const LoadingText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); 
}
  100% { transform: rotate(360deg);
 }
`;

export const LoadingSpinner = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid white;
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const PricingList = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const PricingListElementContainer = styled.div`
  width: 350px;
  min-height: 300px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px #bdc3c7;
  padding: 2rem;
  border: 3px solid white;
  display: flex;
  transition: 0.2s ease 0s;
  justify-content: space-between;
  flex-direction: column;
  &:nth-child(1) {
    background: linear-gradient(to bottom, #f39c12, #d35400);
  }
  &:nth-child(2) {
    background: linear-gradient(to bottom, #33d9b2, #27ae60);
  }
  &:nth-child(3) {
    background: linear-gradient(to bottom, #12cbc4, #0652dd);
  }
  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 900px) {
    margin-bottom: 1rem;
  }
`;

export const PricingListElementTitle = styled.h4`
  font-weight: 500;
  text-transform: capitalize;
  text-align: left;
  text-shadow: 0px 1px 5px white;
`;

export const PricingListElementPrice = styled.h1`
  text-align: left;
  font-size: 50px;
  font-weight: 500;
  text-shadow: 0px 1px 5px white;
  span {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export const PricingContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 5rem);
  padding-top: 4rem;
  @media (max-width: 900px) {
    padding-bottom: 2rem;
  }
`;

export const PricingTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #2f3542;
  font-size: 40px;
`;

export const PricingSubmitButton = styled(Button)`
  background-color: black;
  color: white;
  text-transform: uppercase;
  padding: 1rem;
  height: auto;
  width: 100%;
`;

export const YellowLine = styled.div`
  width: 150px;
  height: 3px;
  background-color: #f1c40f;
  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`;
