import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from 'seed';

const config = {
	apiKey: 'AIzaSyCPIUelcShFqjgXHhLhFPikiWQ7rBuL39U',
	authDomain: 'netflix-clone-d3658.firebaseapp.com',
	projectId: 'netflix-clone-d3658',
	storageBucket: 'netflix-clone-d3658.appspot.com',
	messagingSenderId: '1066613491612',
	appId: '1:1066613491612:web:d5f1f017cec6e89c9baa59',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
