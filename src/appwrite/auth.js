import conf from "../conf/conf";
import { Client, Account, ID } from 'appwrite'

export class AuthService{}

const authservice = new AuthService

export default authservice





const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});