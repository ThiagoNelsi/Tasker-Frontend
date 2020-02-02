import React, { useState } from 'react';
import axios from 'axios';

import { api } from '../../api/api';
import { Container, Content, Title, Form, InputBlock, Label, Input, Message, LoginButton } from './styles.js';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.get('/list');

    console.log(response);

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