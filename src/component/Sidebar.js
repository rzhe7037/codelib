import React, { Component } from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown';
class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:null
        }
    }

    componentDidMount(){
        const path = this.props.match.params.path;
        const categoryFromPath = path.split('/')[0];


        fetch(`/api/menuNode/search/category=${categoryFromPath}`)
        .then( data => data.json())
        .then(data => {
            this.setState({data:data.result});
        })
        .catch(err=>
            {
                console.log(err)
                return
            }
        )
        
    }
    render() {
        const path = this.props.match.params.path;
        const categoryFromPath = path.split('/')[0];
        if(this.state.data == null){
            return <div></div>;
        }
        const sidebarList = this.state.data.structure.map((list,id) => {
            if(list.children.length > 0){
                return <Dropdown key={id} children={list.children} label={list.label} category={categoryFromPath}/>
            }
            else{
                return <li key={id}><a href={`/${categoryFromPath}/${list.id}`}>{list.label}</a></li>
            }
        });
       
        return (
            <div className="sidebar">
                <div className="sidebar-header"><a href={`/${categoryFromPath}`} >{categoryFromPath}</a></div>
                <ul className="sidebar-body">
                    {sidebarList}
                </ul>    
            </div>
        );
    }
}

export default Sidebar;