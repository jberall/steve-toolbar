import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillDemoComponent } from './quill-demo.component';

describe('QuillDemoComponent', () => {
  let component: QuillDemoComponent;
  let fixture: ComponentFixture<QuillDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuillDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
