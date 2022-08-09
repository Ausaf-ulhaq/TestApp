import React,{Component} from "react";
import ReactDOM from "react-dom";

const Footer = (props) => {
    
    return(
        <React.Fragment>
            <hr/>
            <h2><center>&copy; 2022 All right reserve ❤ Developer Funnel {props.year} {props.month}</center></h2>
        </React.Fragment>
    )
}

export default Footer;