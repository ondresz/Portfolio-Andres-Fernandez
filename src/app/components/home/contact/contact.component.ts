import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faStackOverflow, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { personalData } from '../../../../utils/data/personal-data';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ContactFormComponent,],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  personalData = personalData;

  // Font Awesome Icons
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faStackOverflow = faStackOverflow;
  faFacebook = faFacebook;
}
