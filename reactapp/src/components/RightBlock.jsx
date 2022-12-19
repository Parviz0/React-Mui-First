import React from "react";
import BlockUser from "./_chiled_/BlockUser"
import Button from "./_chiled_/Button"

const RightBlock = () => {
    return (
        <div className="rightBlock">
            <div className="in_block_right">
                <h3>Friend Activity</h3>
                <span>Let friends and followers on Spotify see what you’re listening to.</span>
                <BlockUser />
                <span>Go to Settings &gt Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</span>
                <Button/>
            </div>
        </div>
    )
}


export default RightBlock;