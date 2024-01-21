import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ProfileService } from "../../service/profile/profile.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private auth: ProfileService) {}

  signinForm: FormBuilder | any;

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
  }

  signin() {
    const data = this.signinForm.value;
    console.log({ data });
    this.auth.signIn(data);
  }
}
