import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HTTPInterceptor } from './http/http-interceptor';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { BodyComponent } from './layout/body/body.component';
import { TableProductComponent } from './product/table-product/table-product.component';
import { CuProductComponent } from './product/cu-product/cu-product.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoAvatarComponent } from './layout/logo-avatar/logo-avatar.component';
import { OptionComponent } from './layout/option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TableProductComponent,
    CuProductComponent,
    LogoAvatarComponent,
    OptionComponent,
    HeaderComponent,
    BodyComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
