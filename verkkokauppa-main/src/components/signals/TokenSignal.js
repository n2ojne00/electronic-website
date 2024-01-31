import { effect, signal } from "@preact/signals-react";

export const jwtToken = signal(getToken());

//Gets jwt token from the session storage
function getToken(){
    const t = sessionStorage.getItem('token');
    return t===null || t==='null' ? '' : t;
}

export function updateToken(value) {
    jwtToken(value);
    sessionStorage.setItem('token', value);
  }
//It the token changes the new values is saved to session storage
//Also the personal customer info is fetched
effect(()=>{
    sessionStorage.setItem('token', jwtToken.value);
});