import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class AuthenticateService {
  constructor(private storage: Storage) {}
  
  async loginUser(credential) {
    /*return fetch("URL_de_tu_superserver")*/
    const user = await this.storage.get("user");
    return new Promise((accept, reject) => {
      if (
        user.email == credential.email &&
        user.password == btoa(credential.password)
      ) {
        accept("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    });
  }

  registerUser(userData) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
