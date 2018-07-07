
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SteveNavComponent } from './steve-nav.component';

describe('SteveNavComponent', () => {
  let component: SteveNavComponent;
  let fixture: ComponentFixture<SteveNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SteveNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteveNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
