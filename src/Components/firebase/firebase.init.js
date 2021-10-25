
import firebaseConfig from './firebase.confic';
import { initializeApp } from 'firebase/app';
const firebaseInitilize=()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInitilize;