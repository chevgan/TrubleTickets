
import { initializeApp } from "firebase/app";



console.log(process.env)
const firebaseConfig = {
    apiKey: "AIzaSyAxuO0MU-Q9fv0xok2orj6p6TjRd2Csz1I",
    authDomain: "trubletickets.firebaseapp.com",
    projectId: "trubletickets",
    storageBucket: "trubletickets.appspot.com",
    messagingSenderId: "176357690835",
    appId: "1:176357690835:web:3502c1e2f3c8d0d125b326"
};


const app = initializeApp(firebaseConfig);