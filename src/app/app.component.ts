import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sole';
  images: string[] = [];

  completedItem($event: any[]) {
    for (const i of $event) {
      this.images.push(i);
    }

  }

  removeImage($event: any) {
    const uuid = $event.file_id;
    this.images.splice(this.images.indexOf(uuid), 1);
  }
}
