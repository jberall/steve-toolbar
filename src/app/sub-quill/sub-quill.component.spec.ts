import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubQuillComponent } from './sub-quill.component';

describe('SubQuillComponent', () => {
  let component: SubQuillComponent;
  let fixture: ComponentFixture<SubQuillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubQuillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
