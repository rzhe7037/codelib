import React, { Component } from 'react';
import './index.css';
import Wrapper from "./Wrapper";

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        fetch(`/api/programlanguage`)
            .then( data => data.json())
            .then( data => {
                this.setState({data:data.result});
        })  
        
    }
    render() {
        
        if(this.state.data.length === 0){
            return null;
        }
        console.log(this.state.data);
        const image_cards = <Wrapper title="Programming tool" data={this.state.data} />
        return (
            <div>
                <div className="container">
                    <div  className="py-2">
                    {
                        image_cards
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;