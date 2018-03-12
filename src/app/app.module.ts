import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import { RouterModule } from '@angular/router';
import {PanelModule} from 'primeng/panel';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:'',component:UserComponent}]),
    TabMenuModule,
    MenuModule,
    PanelModule,
    TabViewModule,
    ButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
