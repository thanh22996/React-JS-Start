import * as types from "./../constants/ActionTypes";
// import * as message from "./../constants/MessageTypes"

export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
    }
}

export const actchangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const actRemoveToCart = (product) => {
    return {
        type: types.REMOVE_TO_CART,
        product
    }
}

export const actUpdateAddToCart = (product, quantity) => {
    return {
        type: types.UPDATE_ADD_TO_CART,
        product,
        quantity
    }
}

export const actUpdateSubToCart = (product, quantity) => {
    return {
        type: types.UPDATE_SUB_TO_CART,
        product,
        quantity
    }
}