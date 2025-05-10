import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../../../../environments/environment';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  recaptchaToken?: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, RecaptchaV3Module],
  templateUrl: './contact-form.component.html',
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
  ],
})
export class ContactFormComponent implements OnInit {
  mailIcon = faPaperPlane;
  isLoading = false;
  statusMessage = '';
  environment = environment;

  userInput: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  error = {
    required: false,
    email: false,
  };

  constructor(private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    emailjs.init(environment.emailJs.publicKey);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  checkRequired(): void {
    this.error.required =
      !this.userInput.name || !this.userInput.email || !this.userInput.message;
  }

  async handleSendMail(event: Event): Promise<void> {
    event.preventDefault();
    this.checkRequired();

    if (this.error.required || !this.isValidEmail(this.userInput.email)) {
      this.error.email = !this.isValidEmail(this.userInput.email);
      return;
    }

    try {
      this.isLoading = true;

      // Get reCAPTCHA token
      const token = await this.recaptchaV3Service.execute('submit').toPromise();

      const templateParams = {
        from_name: this.userInput.name,
        from_email: this.userInput.email,
        message: this.userInput.message,
        'g-recaptcha-response': token
      };

      await emailjs.send(
        environment.emailJs.serviceId,
        environment.emailJs.templateId,
        templateParams
      );

      this.statusMessage = 'Message sent successfully!';

      setTimeout(() => {
        this.statusMessage = '';
      }, 5000);

      this.userInput = {
        name: '',
        email: '',
        message: '',
      };

    } catch (error) {
      console.error('Error sending email:', error);
      this.statusMessage = 'Failed to send message. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }
}