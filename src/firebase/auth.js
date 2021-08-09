import firebase from 'firebase/app'
import 'firebase/auth'
import { createUserDocument } from './user';
import {Link} from 'react-router-dom'
export const signup= async({firstName, lastName, email, password})=>{
    const resp = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = resp.user;
    await user.updateProfile({displayName: `${firstName} ${lastName}`})
    await createUserDocument(user)
    return user
}
export const logout = () =>{
    return firebase.auth().signOut()
}

export const login = async({email, password}) =>{
        const resp = await firebase.auth().signInWithEmailAndPassword(email, password);
        return resp.user
}

export const deleteUserAccount = () =>{
    const user = firebase.auth().currentUser;
    console.log(user.uid)
    user.delete().then(() => {
      alert("Accont has been successfully deleted! Resfresh the page to login again.");
    }).catch((error) => {
        <Link to="/login"> Login again to delete account!</Link>
    });
}