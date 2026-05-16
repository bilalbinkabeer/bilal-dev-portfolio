import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  highlights = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Dubai, UAE' },
    { icon: 'fas fa-briefcase', label: 'Experience', value: '2.5+ Years' },
    { icon: 'fas fa-code', label: 'Domain', value: 'NBFC / Fintech' },
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'M.Sc Electronics' },
    { icon: 'fas fa-language', label: 'Languages', value: 'English, Malayalam, Hindi' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'bilalbinkabeer98@gmail.com' },
  ];
}
