import React, {Component} from 'react';
import './Header.css'

class Header extends Component{
    
    
    render(){
        console.log("Inside render")
        const myStyle={
            header:{
                backgroundColor:'teal'
            }
        }
        return(
            <>
            <header style={myStyle.header}>
             <center>
             <div className='logo' id='logo-1'>React App</div>   
                <input />
                <div style={{color:"white", fontSize:'20px'}}>User Text Here</div>
             </center>
            </header>
            <hr/>
            </>
        )
    }
    constructor(){
        super()

        console.log("Inside constructor")
    }
}

export default Header;