// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB5h7XJ6CCm3ILmzUlC29vY-ryv77IVmpg",
    authDomain: "carorder-8fe4c.firebaseapp.com",
    databaseURL: "https://carorder-8fe4c.firebaseio.com",
    projectId: "carorder-8fe4c",
    storageBucket: "carorder-8fe4c.appspot.com",
    messagingSenderId: "510539070622"
  }
};
