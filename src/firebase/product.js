//contains functions to deal with firestore products
import {firestore} from './config'

export const createProduct = async(product) => {
//get a reference to firestore document
    const docRef = firestore.collection(`products`)

//creating product object
const productInfo = {
    name:product.name,
    price:product.price,
} 

return docRef.add(productInfo)
}