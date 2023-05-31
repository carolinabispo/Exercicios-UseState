import styled from "styled-components";
export const MyComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Div = styled.div`
  width: 400px;
  height: 50vh;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DivForm = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  justify-content: center;
`;
export const DivH1 = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none #ccc;
  border-radius: 4px;
`;
export const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  height: 50px;
  width: 10vw;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const P = styled.p`
  font-weight: bold;
  font-size: 25px;
`;
export const Result = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 25px;
`;
