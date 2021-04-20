import firebase from 'firebase'

// const firebaseConfig = {
//           apiKey: "AIzaSyB8XnyT_Yp_hMUTyhNy2MYoGIB2aQIpaN8",
//           authDomain: "slack-clone-b9532.firebaseapp.com",
//           projectId: "slack-clone-b9532",
//           storageBucket: "slack-clone-b9532.appspot.com",
//           messagingSenderId: "494991987183",
//           appId: "1:494991987183:web:c15688ccb88b619ba8e61a",
//           measurementId: "G-YC7N04PKGS"
//         };

        const firebaseApp = firebase.initializeApp({
          apiKey: "AIzaSyB8XnyT_Yp_hMUTyhNy2MYoGIB2aQIpaN8",
          authDomain: "slack-clone-b9532.firebaseapp.com",
          projectId: "slack-clone-b9532",
          storageBucket: "slack-clone-b9532.appspot.com",
          messagingSenderId: "494991987183",
          appId: "1:494991987183:web:c15688ccb88b619ba8e61a",
          measurementId: "G-YC7N04PKGS"
        })

        const db = firebaseApp.firestore()
        
        //google services

        const auth = firebase.auth()
        const provider = new firebase.auth.GoogleAuthProvider()

        export default db
        export {auth, provider}