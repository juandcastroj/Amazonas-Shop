import { types } from "../types/types"
import { google } from "../../firebase/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

//asincrona correo
export const LoginEmailPassword = (email, password) => {

    return(dispatch) => {

        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
           // console.log("bienvenidoo  " + user.displayName)
            dispatch(actionLogin(user.uid, user.displayName))
            alert("bienvenido  " + user.displayName)
        })
        .catch((e) => {
            console.log(e)
           alert('USUARIO NO ENCONTRADO');

        })
}
}


//asincronica google
export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(actionLogin(user.uid, user.displayName))
                //console.log(user)
                alert("bienvenido  " + user.displayName)
            })
            .catch(e => {
                console.log(e)
            })
    }
}


//sincronica
export const actionLogin = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}


//LOGOUT
//asincrono
export const logout = () => {
    return async(dispatch) => {
        const auth = getAuth();
            await signOut(auth);
            dispatch(logoutSincrono());
            console.log("has cerrado sesión");
    }
}

//sincrono
export const logoutSincrono = () => {
   return{
       type: types.logout,
   }
}