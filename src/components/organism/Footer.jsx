import React from 'react';

const Footer = () => {

    const name = 'Jair Yara';

    const date = () => {
        let d = new Date();
        return d.getFullYear();
    }

    return(
        <footer className='footer'>
            <div className='footer__content container-element'>
                <h2 className='footer__content--text'>
                    {`${ name } - ${ date() }`}
                </h2>
            </div>
        </footer>
    );
};

export default Footer;