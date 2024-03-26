
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, getDoc, doc} from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyDShbyW3WO2faC1Ie_fwK13Llnq7VQtCis",
  authDomain: "vanlife-c4ba7.firebaseapp.com",
  projectId: "vanlife-c4ba7",
  storageBucket: "vanlife-c4ba7.appspot.com",
  messagingSenderId: "254325598686",
  appId: "1:254325598686:web:59fa40bc9e9ac9b661154f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const vansCollectionRef = collection(db, "vans")






export  async function getVans() {

    const snapShot = await getDocs(vansCollectionRef);
    const vans =  snapShot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans

    // const response = await fetch('/api/vans')
    // if (!response.ok) {
    //     throw {
    //         message: "Failed to fetch vans",
    //         statusText: response.statusText,
    //         status: response.status
    //     }
    // }
    // const data = await response.json()
    // return data.vans
}


export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await  getDoc(docRef)
    return {
        ...snapshot.data(),
        id: id
    }

    // const response = await fetch(`/api/vans/${id}`)
    // if (!response.ok) {
    //     throw {
    //         message:"Failed to fetch the van",
    //         statusText: response.statusText,
    //         status: response.status
    //     }
    // }
    // const data = await response.json()
    // return data

}


export async function getHostVans() {
    const response = await fetch('/api/host/vans')
    if (!response.ok){
        throw {
            message: "Failed to fetch host vans",
            StatusText: response.statusText,
            status: response.status
        }
    }

    const data = await response.json();
    return data.vans
}



export async function getHostVan(id) {
    const response = await fetch(`/api/host/vans/${id}`)
    if (!response.ok) {
        throw {
            message: "failed to fetch host van item",
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}