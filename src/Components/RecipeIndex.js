import React from "react";

const ReacipeIndex = ({alphaIndex}) => {
   const alpha = ["a","b","c","d","p","j","z"];
   let num=0;
   return (
        <>
            {   
                alpha.map(item => {
                    return(
                    <div className="numBox" key={num++}onClick={()=>alphaIndex(item)} >
                        <button>{item}</button>
                    </div>)
                })
          }
        </>
    )
}
export default ReacipeIndex;