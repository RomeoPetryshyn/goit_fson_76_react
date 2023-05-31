import React from "react";

class ProductDetails extends React.Component {

    render() {
        const {name, price, type} = this.props;

        return (
            <>
                <div>___________</div>
                <div>name: {name}</div>
                <div>price: {price}</div>
                <div>type: {type}</div>
                <div>___________</div>
            </>
        )
    }
}

export default ProductDetails;