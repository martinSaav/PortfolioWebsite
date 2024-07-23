import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.init({
      publicKey: 'ZWP66zSy6DU8L0Rh6',
    });
    emailjs.send('service_n5cxyz5', 'template_89rnr5j', this.formData)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }, (error) => {
        console.log('FAILED...', error);
      });
  }}
