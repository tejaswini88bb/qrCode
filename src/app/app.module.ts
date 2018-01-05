import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatTableModule } from '@angular/material';

const appRoutes:Routes = [
    {
        path: '',
        component: LoginFormComponent
    },
    {
        path: 'dashboard',
//        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'updateProduct/:id',
        component: UpdateProductComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule,
      NgxQRCodeModule,
      BrowserAnimationsModule,
      MaterialModule,
    MatTableModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
