// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: '9cbc8623-4236-489c-846a-9e5caa790e42', // Your Application (client) ID
        authority: 'https://login.microsoftonline.com/1a27e1f6-9572-4453-9216-fea3277d2f27', // e.g., "https://login.microsoftonline.com/common"
        redirectUri: 'http://localhost:3000', // Your redirect URI
            //   redirectUri: 'https://etsservices-2dc11.web.app/', // Your redirect URI
  
      },
};

export const loginRequest = {
  scopes: ["User.Read"], // Adjust scopes as needed
};

export const msalInstance = new PublicClientApplication(msalConfig);