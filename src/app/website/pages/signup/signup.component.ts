import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../service/profile/profile.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  signupForm: FormBuilder | any;

  constructor(private formBuilder: FormBuilder, private auth: ProfileService) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [""],
      firstName: [""],
      lastName: [""],
      phone: [""],
      password: [""],
    });
  }

  signup() {
    const data = this.signupForm.value;
    console.log({ data });
    this.auth.signup(data);
    console.log("pressed");
  }
}
