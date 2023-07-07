import { useSelector, useDispatch } from "react-redux";
import { setColorTheme } from "../../redux/colorThemes/slice";
import { setLanguage } from "../../redux/language/slice";
import { selectColorTheme } from "../../redux/colorThemes/selectors";
import { selectLanguage } from "../../redux/language/selectors";
import { selectProducts } from "../../redux/products/selectors";

function Content() {
    const dispatch = useDispatch();

    const colorScheme = useSelector(selectColorTheme);
    const style = {
        width: 400,
        color: colorScheme === 'light' ? 'black' : 'white',
        backgroundColor: colorScheme === 'light' ? 'white' : 'black',
    }
    const handleThemeSwitch = () => {
        dispatch(setColorTheme(colorScheme === 'light' ? 'dark' : 'light'));
    }

    const language = useSelector(selectLanguage);
    const handleLanguageSwitch = () => {
        dispatch(setLanguage(language === 'en' ? 'ua' : 'en'));
    }

    const products = useSelector(selectProducts);
    // const allProductsPrice = useSelector(selectAllProductsPrice);
    // const allFruitsPrice = useSelector(selectFruitsPrice);
    // const allVegetablesPrice = useSelector(selectVegetablesPrice);
    
    
    // const products = useSelector(selectProductsByOrigin('UA'));
    // console.log(products);
    // const totalPrice = calculateSum(products);

    // All Products
    // const products = useSelector(selectProducts);
    // const totalPrice = useSelector(selectAllProductsPrice);

    // const allFruits = useSelector(selectAllFruits);
    // const totalPrice = useSelector(selectAllFruitsPrice); // fruits total price

    // const allVegetables = useSelector(selectAllVegetables);
    // const totalPrice = useSelector(selectAllVegetablesPrice); // vegetables total price

    return <div style={style}>
        <div>I am Content</div>
        <button onClick={handleThemeSwitch}>Switch color theme</button>
        <br/>
        <div>Language: {language}</div>
        <button onClick={handleLanguageSwitch}>Switch language</button>
        <br/><br/>
        <div style={{ marginBottom: 30 }}>{products.map(({ name, price, amount, type, origin }) => (<div>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <div>Amount: {amount}</div>
            <div>Type: {type}</div>
            <div>Origin: {origin}</div>
            <br/>
        </div>))}</div> 
        
        {/* <div>ALL PRODUCTS Total price: {allProductsPrice}</div>
        <div>FRUITS Total price: {allFruitsPrice}</div>
        <div>VEGETABLES Total price: {allVegetablesPrice}</div> */}
        <br/><br/>
    </div>
}

export default Content;