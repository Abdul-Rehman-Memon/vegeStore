import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "../../service/contact/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  form: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
    private contact: ContactService,
  ) {}

  contactWidgets = [
    {
      icon: "icon_phone",
      title: "Phone Number",
      text: "+4073521412",
    },
    {
      icon: "icon_pin_alt",
      title: "Address",
      text: "190, Baleni ,Dambovita, Romania",
    },
    {
      icon: "icon_clock_alt",
      title: "Opening Hours",
      text: "Mon - Fri: 9:00 - 18:00",
    },
    {
      icon: "icon_mail_alt",
      title: "Email Address",
      text: "info@gmail.com",
    },
  ];

  ngOnInit() {
    this.forms();
  }
  forms() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  submitForm() {
    const data = this.form.value;

    console.log({ data });
    const response = this.contact.createContact(data);
    console.log({ response });
  }
}
