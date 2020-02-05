import React from 'react'; 
import '../components/ListItem.css';

const ListItem = ({avatar,shortDescription}) => {
    return (
    <div className="list-item-wrapper">
        <img src={avatar} alt="avatar"/>
        <div className="describtion">{shortDescription}</div>
        <button>></button>
    </div>
    );
};


export default ListItem;