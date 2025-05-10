import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class WhatsappButtonComponent {
  whatsappIcon = faWhatsapp;
  phoneNumber = '+923217281104';

  openWhatsApp() {
    const message = 'Hello! I visited your portfolio and would like to connect.';
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}