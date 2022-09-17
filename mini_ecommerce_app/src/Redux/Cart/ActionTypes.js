import {ADD_TO_CART, DECREASE_QUNTY_TO_CART, INCREASE_QUNTY_TO_CART, REMOVE_FROM_CART} from './Action'


export  const addToCart = (payload)=>({
    type:ADD_TO_CART,payload
})
export  const increaseQty = (payload)=>({
    type:INCREASE_QUNTY_TO_CART,payload
})
export  const decreaseQty = (payload)=>({
    type:DECREASE_QUNTY_TO_CART,payload
})
export  const removeFromCart = (payload)=>({
    type:REMOVE_FROM_CART,payload
})
