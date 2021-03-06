import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HighlightDirective } from './highlight.directive';
import { NoSanitizePipe } from './util/sanitizePipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { HttpClientModule } from '@angular/common/http';
import { DownloadComponent } from './download/download.component';
import { AnnotateComponent } from './annotate/annotate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FileSaverModule } from 'ngx-filesaver';
import { HomeComponent } from './home/home.component';
// import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    DownloadComponent,
    AnnotateComponent,
    // HighlightDirective
    NoSanitizePipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
