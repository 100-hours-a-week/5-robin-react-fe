import React from 'react';
import '../styles/InputProfile.css';

function InputProfile({label, type, placeholder, name, title, helper}) {
    return (
        <section className='inputContainer'>
            <div className='inputField'>
                <p className='title'>{label}</p>
                {helper && <p className='helper' id='helper-text'>{helper}</p>}
                <div className="profile-img" id="noprofile_img">
                    <p className="circle">도형</p>
                    <p className="line-1"></p>
                    <p className="line-2"></p>
                </div>
            </div>
        </section>
    );
}

export default InputProfile;