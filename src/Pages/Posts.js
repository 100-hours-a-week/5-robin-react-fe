import React from 'react';
import Header from '../Components/Header';
import SendBtn from '../Components/SendButton';
import Mtptitle from '../Components/Mtptitle';
import InputField from '../Components/InputField';
import MoveText from '../Components/MoveText';
import Title from '../Components/Title';
import WriteButton from '../Components/WriteButton';
import PostCard from '../Components/PostCard';

function Posts() {
    return (
        <>

        <Header text="아무 말 대잔치" right="1" />
        <Title />
        <WriteButton text="게시글 작성" />
        <PostCard title="제목 1" like="0" comment="0" hit="0" reg_date="2021-01-01 00:00:00" reg_user="더미 작성자1" />
        <PostCard title="제목 2" like="0" comment="0" hit="0" reg_date="2021-01-01 00:00:00" reg_user="더미 작성자1" />
        <PostCard title="제목 3" like="0" comment="0" hit="0" reg_date="2021-01-01 00:00:00" reg_user="더미 작성자1" />
        <PostCard title="제목 4" like="0" comment="0" hit="0" reg_date="2021-01-01 00:00:00" reg_user="더미 작성자1" />
        </>
    );
}

export default Posts;