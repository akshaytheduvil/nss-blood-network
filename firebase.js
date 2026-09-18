/* ==================================================
   NSS BLOOD DONOR NETWORK
   FIREBASE INITIALIZATION (single source of truth)
================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    initializeFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    doc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDZOv3UaYRGWi2ZElQHNBokeaRVWdogEj0",
    authDomain: "pptm-nss-blood-network.firebaseapp.com",
    projectId: "pptm-nss-blood-network",
    storageBucket: "pptm-nss-blood-network.firebasestorage.app",
    messagingSenderId: "545679914379",
    appId: "1:545679914379:web:6ecc8b0825ea162d922b8e"
};

const app = initializeApp(firebaseConfig);

/* Single Firestore instance across the whole app. */
const db = initializeFirestore(app, {}, "default");

const auth = getAuth(app);

/* Shared collection names — change here, updates everywhere. */
export const COLLECTIONS = {
    DONORS: "donorDirectory",
    REQUESTS: "bloodRequests",
    STATS: "stats"
};

export {
    app,
    db,
    auth,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    doc,
    query,
    where,
    orderBy,
    limit,
    serverTimestamp,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
};