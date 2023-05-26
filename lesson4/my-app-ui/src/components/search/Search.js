import React from 'react';
import _ from 'lodash';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: '',
            selectResult: ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.displaySearchResults = this.displaySearchResults.bind(this);
        this.buildTypeOptions = this.buildTypeOptions.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSearch(event) {
        this.setState({ searchResult: event.target.value });
    }

    handleSelect(event) {
        this.setState({ selectResult: event.target.value });
    }

    handleReset() {
        this.setState({ searchResult: '', selectResult: '' });
    }

    displaySearchResults() {
        const { searchResult, selectResult } = this.state;
        const { products } = this.props;

        // console.log({ searchResult, selectResult });

        const filteredProducts = products.filter(({name, type}) => {
            const searchResultLower = searchResult.toLowerCase();
            const productNameLower = name.toLowerCase();
            return productNameLower.includes(searchResultLower) 
                && (!type || type === selectResult);
        });

        return filteredProducts.map((product) =>
            <div key={product.id}>Name: {product.name} || Price: {product.price} || Type: {product.type}</div> 
        );
    }

    buildTypeOptions() {
        const { products } = this.props;
        const uniqProductsByType = _.uniqBy(products, 'type');
        const uniqProductTypes = _.map(uniqProductsByType, 'type');
        
        return uniqProductTypes.map((type, index) => 
            <option key={`type-${type}-${index}`} value={type}>{type}</option>
        );
    }

    render() {
        const { searchResult, selectResult } = this.state;

        return (
            <div style={{marginTop: 100}}>
                <input 
                    type="text" 
                    placeholder="Search some product" 
                    value={searchResult}
                    onChange={this.handleSearch}
                />

            <label>
                Select product type
                <select name="type" onChange={this.handleSelect} value={selectResult}>
                    <option value="" disabled>
                        ...
                    </option>
                    {this.buildTypeOptions()}
                </select>
            </label>

            <button onClick={this.handleReset} style={{marginLeft: 30}}>Reset</button>

                <div style={{margin: 30}}>
                    <h1>List of products</h1>
                    <div>{this.displaySearchResults()}</div>
                </div>
            </div>
        )
    }
}

export default Search;