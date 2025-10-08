//class component
import React from 'react';
 
class MyComponent extends React.Component {
    //jsx
    state = {
        name: 'Loi',
        age: 30,
        address: 'hai phong'
    }
    handleClick(event){
        console.log('clicked');
        console.log(event.target);
    }
    render() {
        return (
            <div>
                My name is {this.state.name}, age: {this.state.age}, address: {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default MyComponent;
