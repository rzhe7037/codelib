import React, { Component } from 'react';
import './Sidebar.css';
import Dropdown from './Dropdown';
class Sidebar extends Component {
    constructor(props){
        super(props);
        fetch(`/api/test`)
        .then(res => res.json())
        .then(data => console.log(data.a));
    }
    render() {
        const path = this.props.match.params.path;
        const categoryFromPath = path.split('/')[0];
        const CategoryStructure = [
            {
                category: "bootstrap",
                structure: [
                    {
                        label:"CDN",
                        href:"",
                        children:[
                            {
                                label:"xxx",
                                href:"yyy"
                            },
                            {
                                label:"xxx",
                                href:"yyy"
                            },
                            {
                                label:"xxx",
                                href:"yyy"
                            }
                        ]
                    },
                    {
                        label:"Navbar",
                        href:""
                    },
                ]
            },
            {
                category: "javascript",
                structure: [
                    {
                        label:"animation",
                        href:""
                    },
                    {
                        label:"Navbar",
                        href:""
                    },
                ]
            },
        ];
        var category;
        for (let index = 0; index < CategoryStructure.length; index++) {
            const element = CategoryStructure[index];
            if(element.category == categoryFromPath){
                category = element;
                break;
            }
            
        }
        const sidebarList = category.structure.map((list,id) => {
            if(list.children){
                return <Dropdown key={id} children={list.children} label={list.label} />
            }
            else{
                return <li key={id}>{list.label}</li>
            }
        });
       
        return (
            <div className="sidebar">
                <div className="sidebar-header">{categoryFromPath}</div>
                <ul>
                    {sidebarList}
                </ul>    
            </div>
        );
    }
}

export default Sidebar;