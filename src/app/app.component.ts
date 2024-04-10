import { Component } from '@angular/core';

import { ImageUploadComponent } from './image-upload/image-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ImageUploadComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-app';
}
