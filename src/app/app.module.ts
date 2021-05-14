import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { StoreDataService } from './ngrx-store/store-data.service';
import { DataListenerComponent } from './data-listener/data-listener.component';
import { DataGeneratorComponent } from './data-generator/data-generator.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './ngrx-store/reducers';
import { TrendWidgetComponent } from './trend-widget/trend-widget.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ liveData: reducer })
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataListenerComponent,
    DataGeneratorComponent,
    TrendWidgetComponent
  ],
  bootstrap: [AppComponent],
  providers: [StoreDataService]
})
export class AppModule {}
