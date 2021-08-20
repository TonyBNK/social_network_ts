import React from "react";

export const NewPost = () => {
    return (
        <div className={'newpost'}>
            <div>
                <textarea>New post...</textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    );
}