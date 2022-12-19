import React from "react";
import LeftBlockItemOne from "./_chiled_/LeftBlockItemOne";
import LeftBlockItemTwo from "./_chiled_/LeftBlockItemTwo";

const LeftBlock = () => {
    return (
        <>
            <div className="left_part">
                <LeftBlockItemOne/>
                <LeftBlockItemTwo/> 
            </div>
        </>
    )
}


export default LeftBlock;
