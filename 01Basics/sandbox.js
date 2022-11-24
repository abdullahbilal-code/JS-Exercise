import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import {
    getFirestore,
    collection,
    getDocs,
    Timestamp,
    doc,
    setDoc,
    addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

//fireBase Config function

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase intialize
const db = getFirestore(app);

async function getRecipes(db) {
    const recepiesCol = collection(db, "receipies");
    const recipeSnapShot = await getDocs(recepiesCol);
    const recipeList = recipeSnapShot.docs.map((recipe) =>
        recipe.data());
    return recipeList;
}

const recipes = await getRecipes(db);
console.log(recipes);