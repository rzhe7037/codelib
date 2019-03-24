import React, { Component } from 'react';
import CodeObject from '../component/CodeObject';

class Bootstrap extends Component {
    render() {
        return (
            <div className="container my-2">
                <CodeObject/>
                <CodeObject/>
                <CodeObject/>
            </div>
        );
    }
}

export default Bootstrap;