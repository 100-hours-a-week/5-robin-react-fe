import React from 'react';
import Header from '../Components/Header';
import SendBtn from '../Components/SendButton';
import Mtptitle from '../Components/Mtptitle';
import InputField from '../Components/InputField';
import MoveText from '../Components/MoveText';
import InputProfile from '../Components/InputProfile'

function Signup() {
    return (
        <>
        <Header text="아무 말 대잔치" left="1" />
        <Mtptitle text="회원가입" />
        <InputProfile
            label="프로필 사진"
            helper="*프로필 사진을 입력하세요"
        />
        <InputField
          label="이메일*"
          type="text"
          placeholder="이메일을 입력하세요."
          name="email"
          title="이메일을 입력하세요."
          helper="*이메일을 입력하세요"
        />
        <InputField
          label="비밀번호*"
          type="password"
          placeholder="비밀번호를 입력하세요."
          name="password"
          title="비밀번호를 입력하세요."
          helper="*비밀번호를 입력해주세요."
        />
        <InputField
          label="비밀번호 확인*"
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요."
          name="password_chk"
          title="비밀번호를 입력하세요."
          helper="*비밀번호를 한번 더 입력해주세요."
        />
        <InputField
          label="닉네임"
          type="text"
          placeholder="닉네임을 입력하세요."
          name="nickname"
          title="닉네임을 입력하세요."
          helper="*닉네임을 입력해주세요."
        />
        <SendBtn text="회원가입" />
        <MoveText text="로그인하러 가기" />
        </>
    );
}

export default Signup;