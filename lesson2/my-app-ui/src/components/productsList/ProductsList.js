import ProductDetails from "../productDetails/ProductDetails";

const ProductsList = () => {
    const text = 'I am Products List';
    const a = 0;

    const products = [
        {id: 'test-id-1', name: 'tomato', type: '1', price: 70},
        {id: 'test-id-2', name: 'potato', type: '2', price: 10},
        {id: 'test-id-3', name: 'orange', type: '3', price: 40},
        {id: 'test-id-4', name: 'watermelon', type: '4', price: 100},
    ];

    // <>
    //    {[].map((item) => (
    //         <div>{item}</div>
    //    ))}
    // </>

    return (
        <>
            <div>{text}</div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductDetails
                            name={product.name}
                            type={product.type}
                            price={product.price}
                        ><div>I am children!!!</div></ProductDetails>
                    </li>
                ))}
            </ul>

            {/* <ProductDetails />
            <ProductDetails 
                name="watermelon"
                type="10"
            />
            <ProductDetails 
                // name={`potato${a}`} 
                name={"potato"}
                type={"2"}
                price={10}
            />
            <ProductDetails 
                name={"tomato"} 
                type={"3"} 
                price={70}
            />
            <ProductDetails 
                name="orange" 
                type="4" 
                price={50}
            /> */}
        </>
    )
}

export default ProductsList;