import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Wrapper.css';

class Wrapper extends Component {
    render() {
        const title = this.props.title;
        const data = this.props.data;
        const content = data.map((e,id) => 
            <div className="col-md-4 image-container my-3" key={id}>
                <Link to={e.href}><img className="program-image" src={e.img_path} /></Link>
            </div>)
        return (
            <div className="my-3">
                <div className="program-title my-1 px-3">
                    {title}
                </div>
                <div className="row">
                    {content}
                </div>
            </div>
        );
    }
}

Wrapper.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}
export default Wrapper;