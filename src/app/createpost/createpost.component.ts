import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../model/post';
import { ServicesPostService } from '../services-post/services-post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent implements OnInit {
  selectedFile: any = null;
  myDate = new Date();
  submitted = false;
  myForm = new FormGroup({
    entry_title: new FormControl('', [
      Validators.minLength(15),
      Validators.required,
    ]),
    entry_text: new FormControl('', [
      Validators.minLength(100),
      Validators.required,
    ]),
    entry_author: new FormControl(localStorage.getItem('userid')),
    date: new FormControl(this.myDate),
  });

  constructor(private httpservice: ServicesPostService) {}

  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {}

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    const formData = new FormData();
    if (this.myForm.invalid) {
      return;
    }
    for (const key in this.myForm.value) {
      formData.append(key, this.myForm.value[key]);
    }
    formData.append('image', this.selectedFile);
    this.httpservice
      .createPost(formData)
      .subscribe((data: Post) => console.log(data));
  }
}
