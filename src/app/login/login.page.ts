import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";
import { AuthenticateService } from "../services/authenticate.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validatioMessages = {
    email: [
      { type: "required", message: " El email es requerido" },
      { type: "email", message: "Este no es un email valido" },
    ],
    password: [
      { type: "required", message: "La contraseña es requerida" },
      {
        type: "minLength",
        message: "Tiene que tener un minimo de 6 caracteres",
      },
    ],
  };
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  loginUser(credentials) {
    this.authService.loginUser(credentials).then((res) => {
      this.errorMessage = "";
      this.navCtrl.navigateForward("/home");
    });
  }
}
