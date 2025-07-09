import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 companyLinks = [
    { name: 'About', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Mobile', url: '#' },
    { name: 'How it Works', url: '#' },
    { name: 'Contact Us', url: '#' },
  ];

  supportLinks = [
    { name: 'Support Carrer', url: '#' },
    { name: '24h Service', url: '#' },
    { name: 'Quick Chat', url: '#' },
  ];
}
