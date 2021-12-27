import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { appContext } from '../../context';

import api from '../../services/api';
import { Container, Content, Title, Form, InputBlock, Label, Input, Message, LoginButton } from './styles.js';

function Login(props) {

  const { isAuth, setIsAuth } = useContext(appContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (isAuth) history.push('/');
  }, [isAuth]);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password };

    try {
      const response = await api.post('/authenticate', data);
      sessionStorage.setItem('token', response.data.token);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <Container>
      <Content>
        <Title>Login no Tasker</Title>
        <Form onSubmit={handleSubmit}>
          <InputBlock type="email">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={event => setEmail(event.target.value)}
              required
            />
          </InputBlock>
          <InputBlock type="password">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              onChange={event => setPassword(event.target.value)}
              required
            />
          </InputBlock>

          <Message>Ainda não tem uma conta? <a href="/register">Cadastre-se!</a></Message>

          <LoginButton type="submit">Login</LoginButton>

        </Form>
      </Content>
    </Container>
  );
}

export default Login;
