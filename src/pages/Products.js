import React, {useState, useEffect} from "react"
import {firestore} from "../firebase/config"

const Products = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
       const usersRef = firestore.collection('products');
       const unsubscribe = usersRef.onSnapshot(querySnapshot => {
            const products = querySnapshot.docs.map( (doc)=>
            {
                const data = doc.data();
                const id = doc.id;
                const product = {id, data}
                return product
            }
            )
            setProducts(products)
            console.log(products)
       })
       
       return unsubscribe;
        
    }, [])
    function createOrder(){
// Add a new document with a generated id.
firestore.collection("orders").add({
    productName: "",
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

    }
    return (
        <div>
        <table className="ui selectable celled table">
        <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {products.map((product) => (
            <tr key={product.id}>
            <td>{product.data.name}</td>
            <td>{product.data.price}</td>
            <td><button onSubmit={createOrder}>Add to cart</button></td>
            </tr>
          ))}
     
        </tbody>
        </table>
        </div>
    )
}
export default Products