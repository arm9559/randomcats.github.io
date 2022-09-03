import React from "react";

export default function SectionTop({getNewState,dispatch,newPosts,disableButton}){
    return(
      <section className="new-cats-parent">
        <button onClick={()=> dispatch(newPosts())} className="show-more-button" disabled={disableButton}>Show More</button>
        <div className="new-cats-item">
          {getNewState.map((items,index)=>{
            return <img src={items.url} key={index}/>
          })}
        </div>
    </section>
    )
}