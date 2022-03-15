import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { types } from "../types/types"


export const registerEmailPasswName = ( email, password, name ) => {

    return(dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword( auth, email, password )
        .then( async ({user}) => {
            await updateProfile(auth.currentUser, {displayName: name})
            dispatch(registerSinc( user.email, user.uid, user.displayName))
            // alert(`bienvenido `+ user.displayName);
            alert("USUARIO CREADO")
        })
        .catch(e => {
            console.log(e);
        })   
    }
}



export const registerSinc = ( email, password, name ) => {

    return{
        type: types.register,
        payload: {
            email,
            password,
            name
        }

    }
}