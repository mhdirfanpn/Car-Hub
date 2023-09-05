import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { HighlightDirective } from './directive/highlight.directive';



@NgModule({
  declarations: [
    SearchComponent,
    FilterPipe,
    AddBtnComponent,
    HighlightDirective
  ],
  imports: [HttpClientModule,FormsModule],
  exports: [SearchComponent,AddBtnComponent,FilterPipe,HighlightDirective],
  providers: [ 
    AuthService,
  ],
})
export class SharedModule { }
