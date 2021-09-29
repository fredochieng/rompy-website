import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './components/icons/icons.component';
import { ModelCardComponent } from './components/model-card/model-card.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RedZoomModule } from 'ngx-red-zoom';
import { ImageUploaderModule } from 'ngx-image-uploader-next';
import { ClickDirective } from './directives/click.directive';
import { CollapseContentDirective, CollapseDirective, CollapseItemDirective } from './directives/collapse.directive';
import { DepartmentsAreaDirective } from './directives/departments-area.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { FakeSlidesDirective } from './directives/fake-slides.directive';
import { OutsideTouchClickDirective } from './directives/outside-touch-click.directive';
import { OwlPreventClickDirective } from './directives/owl-prevent-click.directive';
import { TouchClickDirective } from './directives/touch-click.directive';
import { AbsoluteUrlPipe } from './pipes/absolute-url.pipe';
import { ColorTypePipe } from './pipes/color-type.pipe';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SingleModelComponent } from './components/single-model/single-model.component';
import { ModelGallaryComponent } from './components/model-gallary/model-gallary.component';





@NgModule({
  declarations: [
    // directives
    ClickDirective,
    CollapseContentDirective,
    CollapseDirective,
    CollapseItemDirective,
    DepartmentsAreaDirective,
    DropdownDirective,
    FakeSlidesDirective,
    OutsideTouchClickDirective,
    OwlPreventClickDirective,
    TouchClickDirective,

     // components
    LoadingBarComponent,
    IconsComponent,
    ModelCardComponent,
    SearchComponent,
    PageHeaderComponent,
    // pipes
    AbsoluteUrlPipe,
    ColorTypePipe,
    SingleModelComponent,
    ModelGallaryComponent,
  
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    // modules (third-party)
    CarouselModule,
    ModalModule.forRoot(),
    RedZoomModule,
    ImageUploaderModule
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
     // directives
     ClickDirective,
     CollapseContentDirective,
     CollapseDirective,
     CollapseItemDirective,
     DepartmentsAreaDirective,
     DropdownDirective,
     FakeSlidesDirective,
     OutsideTouchClickDirective,
     OwlPreventClickDirective,
     TouchClickDirective,

     // components
    LoadingBarComponent,
    IconsComponent,
    ModelCardComponent,
    SearchComponent,
    PageHeaderComponent,
    SingleModelComponent,
    ModelGallaryComponent,
     // pipes
     AbsoluteUrlPipe,
     ColorTypePipe,
  ]
})
export class SharedModule { }
