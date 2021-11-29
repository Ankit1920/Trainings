import React from 'react';

export default class Profile extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name: 'ankit',
            email: 'ankit1234@gmail.com',
            count: 0
        }
    }

    updateState()
    {
        this.setState({
            name: 'yuvraj',
            count: this.state.count + 1
        })
    }

    render()
    {
        return(
            <div className="App">
                <h1 className="count">Count: {this.state.count}</h1>
                <h1 className="email">Email: {this.state.email}</h1>
                <button className="button" onClick = {()=>{this.updateState()}}> Update Name</button>
            </div>
        )
    }
}