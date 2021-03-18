function addProduct(payload) {
    return {
        type: 'ADD_PRODUCT',
        payload
    };
};

function changeQuantity(id, o) {
    return {
        type: 'CHANGE_QUANTITY',
        payload: { id, o }
    };
};

function updateProduct(payload) {
    return {
        type: 'UPDATE_PRODUCT',
        payload
    };
};

function deleteProductMain(payload) {
    return {
        type: 'DELETE_PRODUCT',
        payload
    };
};

function deleteProduct(payload) {
    return (dispatch, getState)=> {
        let { products } = getState();
        if (products.length > 1) {
            dispatch(deleteProductMain(payload));
        }
    };
};

export {
    addProduct,
    changeQuantity,
    updateProduct,
    deleteProduct
};