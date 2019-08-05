import React from 'react';

import {
  Container, LoginForm, UsernameInput, SubmitButton,
} from './styles';

function Welcome() {
  const username = localStorage.getItem('@welcome-app/username');

  function handleSubmit(event) {
    event.preventDefault();

    const newUsername = event.target.elements.username.value;
    localStorage.setItem('@welcome-app/username', newUsername);

    window.location.reload();
  }

  function handleLogout() {
    localStorage.removeItem('@welcome-app/username');

    window.location.reload();
  }

  if (username !== null) {
    return (
      <Container>
        <p>{`Bem vindo ${username}`}</p>
        <SubmitButton onClick={handleLogout}>Sair</SubmitButton>
      </Container>
    );
  }
  return (
    <LoginForm onSubmit={handleSubmit}>
      <UsernameInput type="text" name="username" placeholder="Nome de usuário" required />
      <SubmitButton type="submit">Entrar</SubmitButton>
    </LoginForm>
  );
}

export default Welcome;
