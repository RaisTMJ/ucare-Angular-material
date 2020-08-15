import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sole';
  images: string[] = [];

  constructor(private snackBar: MatSnackBar) {
  }

  completedItem($event: any[]) {
    for (const i of $event) {
  console.log(i)
      this.images.push(i);
    }
  }

  removeImage($event: any) {
    const uuid = $event.file_id;
    this.images.splice(this.images.indexOf(uuid), 1);
  }

  uploadError($event: any) {
    console.log($event);
    this.snackBar.open('Invalid image, please upload again and wait until upload finish', null, {duration: 1000});
  }
}
