import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        const childrenList = this.props.children.map(
            (child,id) => 
                <li key={id}>
                    <a href={child.href}>{child.label}</a>
                </li>
            );
        const label = this.props.label;
        const sublabelId = label+"Submenu";    
        const id= this.props.id;
        return (
            <li key={id} className="dropdown">
                <a href={"#"+sublabelId}  data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">{label}</a>
                <ul className="collapse list-unstyled" id={sublabelId}>
                    {childrenList}
                </ul>
            </li>
        );
    }
}

export default Dropdown;