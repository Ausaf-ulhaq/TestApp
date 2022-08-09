import React, {Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:"React Application",
            keyword:"User Text Here"
        }
    }
    handelChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
    }
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
             <div className='logo' id='logo-1'>{this.state.title}</div>   

                <input className="input-txt" onChange={this.handelChange}/>

                <div style={{color:"white", fontSize:'20px'}}>{this.state.keyword}</div>
             </center>
            </header>
            <hr/>
            </>
        )
    }
    
}

export default Header;