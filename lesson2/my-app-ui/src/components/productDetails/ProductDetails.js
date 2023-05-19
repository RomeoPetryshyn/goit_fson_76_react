import PropTypes from "prop-types";
import './ProductDetails.scss';

function ProductDetails(props) {
    // const productName = props.name;
    // console.log(props);
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
        <div className={"product_details_container"}>
            <span className={"heading"}>I am product.</span>
            <span className={"name"}>My name is: {name}.</span>
            <span className={"type"}>My type is: {type}.</span>
            <span className={"price"}>My price is: {totalPrice}.</span>
            <br />
        </div>
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