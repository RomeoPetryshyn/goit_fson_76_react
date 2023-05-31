import React from "react";
import ProductDetails from "../productDetails/ProductDetails";

class ProductList extends React.Component {
    state = {
        areProductsLoaded: false,
        page: 1,
        productsToDisplay: []
    }

    componentDidMount() {
        const { products } = this.props;
        if (!products?.length) {
            this.setState({ 
                areProductsLoaded: false 
            })
        } else {
            this.setState({ 
                areProductsLoaded: true,
                productsToDisplay: products.slice(0, 5)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // prevProps - попередні пропси
        // Компонент може оновитись з двох причин - зміна стейту або зміна пропсів.
        // componentDidUpdate - викликається після оновлення компоненту (після зміни стейту або пропсів)
        // prevProps у ньому дає нам доступ до попередніх пропсів 
        // prevState у ньому дає нам доступ до попереднього стейту 
        const { products } = this.props;
        if (!prevState.areProductsLoaded && products.length) {
            this.setState({ 
                areProductsLoaded: true,
                productsToDisplay: products.slice(0, 5)
            });
        }

        console.log({ 
            prevPage: prevState.page,
            currentPage: this.state.page,
            products,
            calculation: (this.state.page-1) * 5,
            productsToDisplay: products.slice((this.state.page-1) * 5, (this.state.page-1) + 5)
        });

        const pagesSet = (this.state.page - 1) * 5

        if (prevState.page !== this.state.page) {
            this.setState({ productsToDisplay: products.slice(pagesSet, pagesSet + 5) })
        }
    }

    componentWillUnmount() {
        localStorage.setItem('products', JSON.stringify(this.props.products));
    }

    showProductsList = () => {
        const { productsToDisplay } = this.state;

        return productsToDisplay.map(({ id, name, type, price }, index) => (
            <ProductDetails 
                key={`product-details-item-${id}-${index}`}
                name={name}
                type={type}
                price={price}
            />
        ));
    }

    nextPage = () => {
        const { page } = this.state;
        this.setState({ page: page+1 })
    }

    previousPage = () => {
        const { page } = this.state;
        this.setState({ page: page-1 })
    }

    render() {
        const { products } = this.props;
        const { areProductsLoaded, page } = this.state;

        if (!areProductsLoaded) {
            return <>Loading Products...</>
        }

        // if (!products?.length) {
        //     return <>Loading Products...</>
        // }

        if (products?.length < 8) {
            return <>Not enough products...</>
        }

        const maxNumberOfPages = products.length / 5;
        

        return (
            <>
                {this.showProductsList()}
                <button disabled={page===1} onClick={this.previousPage}>Previous page</button>
                <span>___page:{page}___</span>
                <button disabled={page===maxNumberOfPages} onClick={this.nextPage}>Nest page</button>
                <br /><br /><br /><br /><br />
            </>
        )
    }
}

export default ProductList;
