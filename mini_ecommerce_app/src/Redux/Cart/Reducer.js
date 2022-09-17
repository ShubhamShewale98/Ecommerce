import { ADD_TO_CART } from "./Action";

const initState = {
    cart: []
}

export const CartReducer = (state = initState, action) => {

    const { type, payload } = action
    switch (type) {
        case ADD_TO_CART:
            const isProductPresent = state.cart.find((prod) => {
                return prod.id === payload.id && prod.size === payload.size
            })
            let newCart;
            if (isProductPresent) {
                newCart = state.cart.map((prod) => {
                    if (prod.id === payload.id && prod.size === payload.size) {
                        return { ...prod, qty: prod.qty + 1 }
                    } else {
                        return prod
                    }

                })
            } else {
                let newPayload = {
                    ...payload,
                    qty: 1
                }
                newCart = [...state.cart, newPayload]
            }

            return {
                ...state,
                cart: newCart
            }

        default:
            return state;
    }


}