import React from 'react';
import '../styles/header.css';

function Header({text, left, right}) {
    return (   
        <>
        <header className='headerContainer'>
            <header className="header">
                    
                <div class="header-left">
                {left &&
                    <a href="/">
                    <p class="line-1"></p>
                    <p class="line-2"></p>
                    </a>    
                }
                </div>
                <p>{text}</p>
                <div class="header-right">
                {right &&
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src="../logo192.png" />
                }
                </div>
                    
            </header>    
        </header>
        <hr className="horizontal-rule" />
        </>
    );
}

export default Header;