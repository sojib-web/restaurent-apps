import * as actionTypes from './actionTypes'
import axios from 'axios'
import { baseUrl } from './baseUrl.js'

export const addComment = (dishId , rating, author , comment) =>({
    type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment
        }
})
    

export const  loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload:dishes
})


export const dishesLoding = () =>({
    type:actionTypes.DISHES_LODING
})

export const fetchDishes = () => dispatch =>{
        dispatch(dishesLoding());
        axios.get(baseUrl + "dishes")
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)))
    }
