import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { 
Container,
CardLogin,
Title,
Content,
UserInput,
LoginButton,
LoginButtonText,
ButtonContainer
} from './styles';

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function MakeLogin(){
    if (user && password !== "admin"){
      alert('user: admin password: admin');
      return
    }

    navigate("/Admin")
  }

  return (
    <Container>
      <CardLogin>
        <Title>Fazer login</Title>
          <Content>
          <UserInput
          onChange={ (e) => setUser(e.target.value) }
          placeholder='user'
          /> <br/>
          <UserInput
          placeholder='password'
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
          secureTextEntry={true}
          />

          <ButtonContainer>
            <LoginButton onClick={MakeLogin}>
              <LoginButtonText>LOGAR</LoginButtonText>
            </LoginButton>
          </ButtonContainer>
          </Content>
      </CardLogin>
    </Container>
  )
}

export default Login;