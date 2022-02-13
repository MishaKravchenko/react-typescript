import React, {FC} from 'react';
import {IPost} from "../../interfaces";

const Post: FC<{post:IPost}> = ({post:{id,userId,title,body}}) => {
    return (
        <div>
            <h4>{id}. {title}</h4>
            <p>{userId} - - {body}</p>
        </div>
    );
};

export default Post;