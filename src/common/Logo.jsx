import React from 'react';

import LogoImg from '../../public/assets/images/logo/logo-wasichay.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return   (
        <>
            <Link to="/" className="link">
                <img src={LogoImg} alt="Logo"style={{ width: '120px', height: '50px' }}  />
            </Link>
        </>
    );
};

export default Logo;    