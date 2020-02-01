import React, { useState } from 'react';

import { Container, Content, Title, Form, InputBlock, Label, Input, Message, LoginButton } from './style.js';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Content>
        <Title>Login no Tasker</Title>
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              onChange={event => setEmail(event.target.value)}
              required
            />
          </InputBlock>
          <InputBlock>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              onChange={event => setPassword(event.target.value)}
              required
            />
          </InputBlock>

          <Message>Ainda não tem uma conta? <a href="/app">Cadastre-se!</a></Message>

          <LoginButton type="submit">Login</LoginButton>

        </Form>
      </Content>
    </Container>
  );
}

export default Login;