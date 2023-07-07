import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../redux/products/slice";
import { useRef } from "react";

function ProductsList() {
    const products = useSelector(state => state.products);
    console.log({ products });

    const productNameRef = useRef();
    const productPriceRef = useRef();
    const productToDeleteRef = useRef();

    const dispatch = useDispatch();
    const saveProductHandler = () => {
        const productName = productNameRef.current.value;
        const productPrice = Number(productPriceRef.current.value)
        dispatch(addProduct({ name: productName, price: productPrice }));
    }
    
    const deleteProductHandler = () => {
        const productName = productToDeleteRef.current.value;
        dispatch(deleteProduct({ name: productName }));
    }

    return (
        <div>
            <div>Add Product</div>
            <div>
                <input ref={productNameRef} type="text" placeholder="product name" />
                <input ref={productPriceRef} type="text" placeholder="product price" />
                <button onClick={saveProductHandler}>Save product</button>
                <br/><br/>
                <input ref={productToDeleteRef} type="text" placeholder="product to delete name"/>
                <button onClick={deleteProductHandler}>Hit to delete product</button>
            </div>
        </div>
    )
}

export default ProductsList;