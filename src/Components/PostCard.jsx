/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/postCard.css';

function PostCard({title, like, comment, hit, reg_date, reg_user}) {
    return (
        <section className='post-container'>
            
                <div className='post-field'>
                    <h2 className='list-subject'>{title}</h2>
                    <div className='post-state'>
                        <p className='p-left'>좋아요 {like} 댓글 {comment} 조회수 {hit}</p>
                        <p className='p-right'>{reg_date}</p>
                    </div>
                    <hr className='post-line'/>
                    <div className='reg-user'>
                        <img src="../logo192.png" />
                        <p>{reg_user}</p>
                    </div>
                </div>
            
        </section>
    );
}

export default PostCard;