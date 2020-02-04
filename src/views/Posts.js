import React from 'react';
import {PostsData} from '../../src/data/PostsData';
import ListItem from '../../src/components/ListItem';

export const Posts = () => {

    return (
        <>
        {PostsData.map(item => (
        <ListItem key={item.id} {...item}/>    
        ))} 
        </>
    );
};
