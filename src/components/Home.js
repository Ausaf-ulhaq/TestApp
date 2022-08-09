import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
    render(){
        return(
            <>
                <Header />
                <h2>React Application</h2>
                <Footer year="2022" month="August"/>
            </>
        )
    }
}

export default App;