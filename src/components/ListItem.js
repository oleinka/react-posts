import React from 'react'; 

const ListItem = ({avatar,shortDescription}) => {
    return (
    <div>
        <img src={avatar} alt="avatar"/>
        <div>{shortDescription}</div>
        <button>Więcej</button>
    </div>
    );
};


export default ListItem;