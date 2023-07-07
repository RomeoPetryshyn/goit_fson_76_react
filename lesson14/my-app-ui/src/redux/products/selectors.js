import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = state => state.products;


export const selectProductsByType = inputType => state => {
    const products = selectProducts(state);
    return products.filter(({ type }) => type === inputType);
}









// const getProductsSumByType = (products, inputType) => {
//     return products.reduce((acc, {price, amount, type}) => {
//         if (type === inputType) {
//             acc += price*amount;
//         }
//         return acc;
//     }, 0);
// }
// export const selectFruitsPrice = createSelector([selectProducts], products => {
//     return getProductsSumByType(products, 'fruit');
// });
// export const selectVegetablesPrice = createSelector([selectProducts], products => {
//     return getProductsSumByType(products, 'vegetable');
// });
// export const selectAllProductsPrice = createSelector([selectProducts], products => {
//     // const allFruitsPrice = getProductsSumByType(products, 'fruit');
//     // const allVegetablesPrice = getProductsSumByType(products, 'vegetable');
//     // return allFruitsPrice + allVegetablesPrice;
//     return products.reduce((acc, {price, amount}) => {
//         acc+= price*amount;
//         return acc;
//     }, 0);
// });







// /**
//  * This function returns products by type
//  *
//  * @param {Array} products - List of products
//  * @param {string} inputType - Type of input to return productsBy
//  * @returns {Array} products by type
//  */
// const getProductsByType = (products, inputType) => products.filter(({ type }) => type === inputType);
// export const selectAllFruits = (state) => {
//     const products = selectProducts(state);
//     return getProductsByType(products, 'fruit');
// }
// export const selectAllVegetables = (state) => {
//     const products = selectProducts(state);
//     return getProductsByType(products, 'vegetable');
// }

// export const calculateSum = (products) => {
//     return products.reduce((accumulator, { price, amount }) => {
//         accumulator += price*amount;
//         return accumulator;
//     }, 0);
// }
// export const selectAllFruitsPrice = (state) => {
//     const allFruits = selectAllFruits(state);
//     return calculateSum(allFruits);
// }
// export const selectAllVegetablesPrice = (state) => {
//     const allVegetables = selectAllVegetables(state);
//     return calculateSum(allVegetables);
// };
// export const selectAllProductsPrice = (state) => {
//     const products = selectProducts(state);
//     return calculateSum(products);
// }

// export const selectProductsByOrigin = inputOrigin => state => {
//     const products = selectProducts(state);
//     const allFruits = getProductsByType(products, 'fruit');
//     return allFruits.filter(({ origin }) => origin === inputOrigin);
// }