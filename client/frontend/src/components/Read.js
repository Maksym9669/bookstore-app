import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Read = (props) => {
    return (
        <div>
            <Link to={`/books/details/${props.id}`}>
                <Button style={props.style}>Details</Button>
            </Link>
        </div>
    );
};

export default Read;