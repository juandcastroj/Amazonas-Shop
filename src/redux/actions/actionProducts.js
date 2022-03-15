import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { typesProducts } from "../types/types"



//delete


export const deleteAsync = (nombre) => {
    return async (dispatch) => {

        const estCollection = collection(db, "Amazon Sprint");
        const q = query(estCollection, where("nombre", "==", nombre))
        alert("¿ESTÁS SEGURO DE ELIMINAR ÉSTE PRODUCTO?")
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "Amazon Sprint", docu.id));
        })
        dispatch(deleteSinc(nombre));
    }
}



export const deleteSinc = (nombre) => {
    return {
        type: typesProducts.delete,
        payload: nombre
    }
}



//list 

export const listProductsAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "Amazon Sprint"));
        const products = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            products.push({
                ...doc.data()
            })
        })
        dispatch(listSinc(products));
    }
}


export const listSinc = (productos) => {

    return {
        type: typesProducts.list,
        payload: productos
    }
}





//ADD

export const addAsync = (newProduct) => {

    return (dispatch) => {
        addDoc(collection(db, "Amazon Sprint"), newProduct)
            .then(resp => {
                dispatch(addsinc(newProduct))
                console.log("producto agregado");
            })
            .catch(error => {
                console.log(error);
            })

    }
}


export const addsinc = (products) => {

    return {
        type: typesProducts.add,
        payload: products
    }
}