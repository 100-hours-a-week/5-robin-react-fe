import React from 'react';
import Header from '../Components/Header';
import SendBtn from '../Components/SendButton';
import Mtptitle from '../Components/Mtptitle';
import InputField from '../Components/InputField';
import MoveText from '../Components/MoveText';

function Login() {
    return (
        <>
        <Header text="아무 말 대잔치" />
        <Mtptitle text="로그인" />
        <InputField
          label="이메일"
          type="text"
          placeholder="이메일을 입력하세요."
          name="email"
          title="이메일을 입력하세요."
        />
        <InputField
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요."
          name="password"
          title="비밀번호를 입력하세요."
          helper="*비밀번호를 입력해주세요."
        />
        <SendBtn text="로그인" />
        <MoveText text="회원가입" />
        </>
    );
}

export default Login;