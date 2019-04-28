// Packages
import { GeneralError } from '@feathersjs/errors'

/**
 * @file Firebase configuration
 * @module Firebase
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCeP6oTMNEyOoB7MWD0xC18gvJQcKMlyQY',
  authDomain: 'fisher1yearlater.firebaseapp.com',
  databaseURL: 'https://fisher1yearlater.firebaseio.com',
  projectId: 'fisher1yearlater',
  storageBucket: 'fisher1yearlater.appspot.com'
}

// Initialize Firebase
const Firebase = window.firebase.initializeApp(FIREBASE_CONFIG)
if (!Firebase) throw new GeneralError('Unable to initalize Firebase.')

export default Firebase
