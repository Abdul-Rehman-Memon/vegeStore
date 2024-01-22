import { Injectable } from "@angular/core";
import swal from "sweetalert";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor() {}

  alert() {
    swal("Good job!", "You clicked the button!", "success");
  }
}
