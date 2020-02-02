import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #F7D488;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -300px);
`;

export const Title = styled.h1`
  color: #FFF;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 450px; 
  background-color: rgb(245, 245, 245);

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 10px;

  overflow: hidden;

`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin: 30px 15px;
  margin-bottom: ${props => (props.type === "email" ? "40px" : "20px")}
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: rgb(109, 109, 109);
`;

export const Input = styled.input`
  background-color: rgb(248, 248, 248);

  height: 35px;

  border-width: 0 0 1px 0;
  border-color: #CCC;
  border-radius: 5px;


  margin-top: 10px;
  padding: 3px;

  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: rgb(90, 90, 90);
`;
export const Message = styled.span`
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  text-align: right;
  margin: 0 10px 10px;
`;
export const LoginButton = styled.button`

  width: 70%;
  height: 35px;
  border: 0;
  border-radius: 20px;
  background-color: #557AE8;
  margin: 25px auto 35px auto;
  color: #FFF;
  transition: 0.3s;

  :hover {
    background-color: #93B7BC;
    cursor: pointer;
  }

`;
