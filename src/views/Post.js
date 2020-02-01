import React from 'react';
import {
    useParams
} from "react-router-dom";

export const Post = () => {
    let { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
};
