import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 30px 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 280px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 30px 20px;
`;

export const SubmitButton = styled.button`
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  border: 0;
  color: #fff;
  background-color: #009cde;
  margin-top: 5px;
  cursor: pointer;
`;

export const UsernameInput = styled.input`
  height: 40px;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #444;
  font-size: 16px;

  ::placeholder {
    color: #666;
    font-size: 16px;
  }
`;
