import PropTypes from "prop-types";

function ProductDetails(props) {
    // const productName = props.name;
    console.log(props);
    const name = props.name;
    const type = props.type;
    const price = props.price;
    const totalPrice = price * 1.2;

    if (!name || !type) {
        return (
            <div>Product is empty</div>
        );
    }

    if (!price) {
        return null;
    }

    return (
        <>
            <span>I am product.</span>
            <span>My name is: {name}.</span>
            <span>My type is: {type}.</span>
            <span>My price is: {totalPrice}.</span>
            <br />
        </>
    )
}

ProductDetails.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number.isRequired
};

// Product.propTypes = {
// };

export default ProductDetails;