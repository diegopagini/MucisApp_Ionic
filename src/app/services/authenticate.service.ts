import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthenticateService {
  constructor() {}
  loginUser(credential) {
    /*return fetch("URL_de_tu_superserver")*/
    return new Promise((accept, reject) => {
      if (
        credential.email == "test@test.com" &&
        credential.password == "123456"
      ) {
        accept("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    });
  }
}
