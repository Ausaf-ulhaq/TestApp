import React from 'react';

const Footer = (props) => {
    return(
        <>
        <center><hr/>
        <h3>&copy; {props.year} {props.month} Made in  by Developer Funnel</h3>
        </center>
        </>
    )
}

export default Footer;