import React from 'react';
import Logo from '../../src/assets/image/logo.svg'
const Header = () => {

    const menu = [
        {
            title: 'Products',
            link: '/products',
        },
        {
            title: 'Pricing',
            link: '/pricing',
        },
        {
            title: 'Dashboard',
            link: '/dashboard',
        },
    ]

    return (
        <div>
            <div className='logo'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className="menu-wrapper">
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}

                </ul>
                <div className="auth-buttons">
                    <button className='login'>Login</button>
                    <button className="sign-in">Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
