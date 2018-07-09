import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-quill',
  template: `
    <quill-editor theme="snow" [formControl]="ctl"
    [style]="{height: '200px'}"
    [modules]="{toolbar: true}"
    placeholder="{{placeholder}}"></quill-editor>
    <mat-error *ngIf="!ctl.pristine && ctl.hasError('required')">
    <div>
      A note is required!
    </div>
  </mat-error>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubQuillComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() ctl: FormControl;
  @Input() placeholder = 'Placeholder';
  constructor() {}

  ngOnInit() {}
}
