import React from 'react';
import BottomFooterLinks from './footer/BottomFooterLinks';

const FooterBottom = (props) => {
    return (
        <>
             <div className={`bottom-footer ${props.footerClass}`}>
                <div className="container container-two">
                    <div className="bottom-footer__inner flx-between gap-3">
                        <p className="bottom-footer__text"> &copy; Wasichay {new Date().getFullYear()} | Todos los derechos reservados.</p>
                        <BottomFooterLinks/>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default FooterBottom;