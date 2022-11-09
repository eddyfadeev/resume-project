import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export class Email {
  constructor(public fullName: string,
              public emailAddress: string,
              public message: string) {}
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: Email = new Email("", "","");
  success: boolean;
  show: boolean = false;
  autohide: boolean = true;

  constructor( ) { }

  public sendEmail(e: Event) {
    emailjs.sendForm('service_j0n7zhk', 'template_0fd6bvr', e.target as HTMLFormElement, 'EP5usxuj_TeEs_Qsp')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.success = true;
      }, (error) => {
        console.log(error.text);
        this.success = false;
      });
  }

  clearForm(form: HTMLFormElement) {
    form.reset();
  }

}
