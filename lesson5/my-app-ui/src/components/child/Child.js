import React from "react";

class Child extends React.Component {
// Portal logic
    render() {
        return (
            <div className="modal">
                <div>I am Modal WINDOW!!! WITH REACT PORTAL</div>
                <button>Click</button>
            </div>
        );
    }
}

export default Child;