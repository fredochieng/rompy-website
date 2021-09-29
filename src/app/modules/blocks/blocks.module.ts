import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockSlideshowComponent } from './block-slideshow/block-slideshow.component';
import { BlockFeaturesComponent } from './block-features/block-features.component';
import { BlockProductsCarouselComponent } from './block-products-carousel/block-products-carousel.component';
import { BlockHeaderComponent } from './components/block-header/block-header.component';
import { RouterModule } from '@angular/router';
// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BlockSlideshowComponent,
    BlockFeaturesComponent,
    BlockProductsCarouselComponent,
    BlockHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // modules (third-party)
    CarouselModule,
    // modules
    SharedModule
  ], 
  exports: [
    BlockSlideshowComponent,
    BlockFeaturesComponent,
    BlockProductsCarouselComponent,
    BlockHeaderComponent
  ]
})
export class BlocksModule { }
