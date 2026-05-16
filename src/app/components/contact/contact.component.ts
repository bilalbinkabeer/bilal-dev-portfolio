import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'bilalbinkabeer98@gmail.com',
      href: 'mailto:bilalbinkabeer98@gmail.com',
      accent: '#00d4ff'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp (Dubai)',
      value: '+971 54 215 7969',
      href: 'https://wa.me/971542157969',
      accent: '#25D366'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp (India)',
      value: '+91 90375 19329',
      href: 'https://wa.me/919037519329',
      accent: '#25D366'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Dubai, UAE',
      href: 'https://maps.google.com/?q=Dubai,UAE',
      accent: '#ff6b6b'
    }
  ];

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/bilal-bin-kabeer-3371ba24a', label: 'LinkedIn', color: '#0A66C2' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/_bilal_18._', label: 'Instagram', color: '#E1306C' },
    { icon: 'fab fa-github', url: 'https://github.com', label: 'GitHub', color: '#ffffff' },
  ];
}
