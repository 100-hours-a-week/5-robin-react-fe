import React from 'react';
import '../styles/title.css';

function Title() {
    return (
        <section className='title'>
            <div className='container'>
                <p>안녕하세요,</p>
                <p>아무 말 대잔치 <strong>게시판</strong> 입니다.</p>
            </div>
        </section>
    );
}

export default Title;