// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        peeps: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                peeps: data.people
            })
        })
    }
    render (){
        return(
            <div><h1>{this.state.peeps[0]}</h1></div>
        )
    }



}
export default App;