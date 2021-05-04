import express from "express";
import cors from "cors";
import * as admin from "firebase-admin";
import dbConnection from "./db/connection.js";
require("dotenv").config();
import firebase from "firebase";
import "firebase/storage";

const app = express();
const PORT = process.env.PORT || 5000;
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FB_TYPE,
    project_id: process.env.FB_PROJECT_ID,
    private_key_id: process.env.FB_PRIVATE_KEY_ID,
    private_key: process.env.FB_PRIVATE_KEY,
    client_email: process.env.FB_CLIENT_EMAIL,
    client_id: process.env.FB_CLIENT_ID,
    auth_uri: process.env.FB_AUTH_URI,
    token_uri: process.env.FB_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FB_AUTH_PROVIDER,
    client_x509_cert_url: process.env.FB_CERT_URL,
  }),
  storageBucket: process.env.FB_STORAGE_BUCKET,
});

const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);
// Establish mongoDB connection
dbConnection()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

app.use(cors());
// serving static file
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);
app.use(express.json({ limit: "5mb" }));

app.use("/api/blog/", require("./routes/api/blog"));
app.use("/api/image/", require("./routes/api/image"));
app.use("/api/meta/", require("./routes/api/meta"));

//App running at
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
