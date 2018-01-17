import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [LeafletModule.forRoot(), BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
