import { SubQuillModule } from './sub-quill/sub-quill.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SteveNavComponent } from './steve-nav/steve-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatAutocompleteModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatBadgeModule,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteOptgroupExampleComponent } from './autocomplete-optgroup-example/autocomplete-optgroup-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { QuillDemoComponent } from './quill-demo/quill-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SteveNavComponent,
    AutocompleteOptgroupExampleComponent,
    QuillDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    QuillModule,
    SubQuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
