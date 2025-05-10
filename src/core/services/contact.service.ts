// src/core/services/contact.service.ts
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { ContactForm } from '../models/contact.interface';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    constructor() {
        emailjs.init(environment.emailJs.publicKey);
    }

    async sendMessage(formData: ContactForm) {
        try {
            const response = await emailjs.send(
                environment.emailJs.serviceId,
                environment.emailJs.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                }
            );
            return { success: true, message: 'Email sent successfully' };
        } catch (error) {
            console.error('Failed to send email:', error);
            return { success: false, message: 'Failed to send email' };
        }
    }
}