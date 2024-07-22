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
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.formData, 'YOUR_USER_ID')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
  }}
