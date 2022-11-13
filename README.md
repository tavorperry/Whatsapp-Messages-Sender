# Live Example
http://tinyurl.com/jwhatsappsender

## How to use

## Either delete firebase relevant lines from App.js or add firebase properties.
### How to add the Firebase properties?
create a new properties.js file under src directory and export firebaseConfig const (see firebase docs).

Example for firebaseConfig in properties.js:

`export const firebaseConfig = {
apiKey: '***********',
authDomain: 'whatsapp-messages-sender.firebaseapp.com',
projectId: 'whatsapp-messages-sender',
storageBucket: 'whatsapp-messages-sender.appspot.com',
messagingSenderId: '***********',
appId: '1:******:web:*******',
measurementId: 'G-*******',
};`

### then run:
### `npm install`

### and finally run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
