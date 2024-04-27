import React, {Component} from 'react';

class TestApiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        fetch('/api/test/testendpoint', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({message: data.message}))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const {message} = this.state;
        return (
            <div>
                <h1>Backend Test</h1>
                {message ? (
                    <p>Response from backend: {message}</p>
                ) : (
                    <p>Waiting for response from backend...</p>
                )}
            </div>
        );
    }
}

export default TestApiComponent;