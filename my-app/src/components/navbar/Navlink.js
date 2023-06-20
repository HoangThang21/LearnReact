import React from 'react';

const Navlink = (props) => {
    return (
        <div>
            <a href="#">{props.name?props.name:'Link'}</a>
            
        </div>
    );
};

export default Navlink;