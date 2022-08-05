import react,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super()

        this.state={
            title:"React Application",
            keyword:"This is a test app for React"
        }
    }
    render() {
        return(
        <>
            <h2>This is a new {this.state.title}</h2>
            <p>{this.keyword}</p>
        </>
        )
    };
}
export default App;