import React from "react";
/* Redux Hook */
import { useSelector } from "react-redux";
export default function Ties(){
  const {posts,loading} = useSelector((state) => ({...state.data}));
    return(
        <div className="cat-item">
        {!loading ? (
            posts.map((post,index) => <img src={post.url} key={index}/>)
            ):(
            <h3>Loading...</h3>
            )
        }
        </div>
    )
}