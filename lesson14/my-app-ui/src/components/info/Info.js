import { useState, useEffect } from 'react';
import { selectProducts, selectProductsByType } from '../../redux/products/selectors';
import { useSelector } from 'react-redux';
import Select from 'react-select';

function Info() {
    const [type, setType] = useState();
    const [products, setProducts] = useState([]);
    const options = [
        { value: 'vegetable', label: 'Vegetable' },
        { value: 'fruit', label: 'Fruit' },
    ];

    const newProducts = useSelector(selectProductsByType(type));

    useEffect(() => {
        setProducts(newProducts)
    }, [type]);

    return <div>
        <div>I am Info</div>
        <div style={{ width: 300 }}>
            <Select 
                options={options} 
                onChange={({ value }) => setType(value)}
            />
        </div>
        <br/>
        <div style={{ marginBottom: 30 }}>{products.map(({ name, price, amount, type, origin }) => (<div>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <div>Amount: {amount}</div>
            <div>Type: {type}</div>
            <div>Origin: {origin}</div>
            <br/>
        </div>))}</div> 
    </div>
}

export default Info;