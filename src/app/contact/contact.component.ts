import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(public http: HttpClient) {}
  name: string = '';
  file: any;
  getName(name: string) {
    this.name = name;
  }
  getFile(event: any) {
    event.preventDefault();
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
  submitData() {
    let formData = new FormData();
    formData.set('name', this.name);
    formData.set('file', this.file);

    this.http
      .post('http://137.184.67.138:3004/fileupload', formData)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
