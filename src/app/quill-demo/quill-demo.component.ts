import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quill-demo',
  templateUrl: './quill-demo.component.html',
  styleUrls: ['./quill-demo.component.css']
})
export class QuillDemoComponent implements OnInit {
  form = new FormGroup({
    note: new FormControl()
  });
  constructor() {}

  ngOnInit() {}
}
