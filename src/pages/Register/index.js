import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { appContext } from '../../context';

import { Container, Content, Title, Form, InputBlock, Label, Input, LoginButton } from './styles';
import api from '../../services/api';

function Register() {

  const { isAuth, setIsAuth } = useContext(appContext);
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username,
      email,
      password,
    }

    try {
      const response = await api.post('/register', data);
      sessionStorage.setItem('token', response.data.token);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <Container>
      <Content>
        <Title>Registrar Conta</Title>
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <Label>Username</Label> 
            <Input onChange={(event) => setUsername(event.target.value)}></Input>
          </InputBlock>
          <InputBlock>
            <Label>Email</Label> 
            <Input type="email" onChange={(event) => setEmail(event.target.value)}></Input>
          </InputBlock>
          <InputBlock>
            <Label>Password</Label> 
            <Input type="password" onChange={(event) => setPassword(event.target.value)}></Input>
          </InputBlock>
          <LoginButton type="submit">Registrar</LoginButton>
        </Form>
      </Content>
    </Container>
  )
} 

export default Register;