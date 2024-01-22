import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { WebsiteModule } from "./website/website.module";
import { TokenInterceptor } from "./website/core/token.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddeditProductModalComponent } from './websites/modals/addedit-product-modal/addedit-product-modal.component';

@NgModule({
  declarations: [AppComponent, AddeditProductModalComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, WebsiteModule],
  providers: [
    // Provide the TokenInterceptor as an HTTP interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
