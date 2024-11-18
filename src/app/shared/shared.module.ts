import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxWhatsNewModule } from 'ngx-whats-new';
import { MaterialModule } from '../material.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    imports: [
        FilterPipe,
        CommonModule,
        FormsModule,
        MaterialModule,
        NgxWhatsNewModule,
        ReactiveFormsModule,
        TranslateModule,
        NgxSkeletonLoaderModule.forRoot({
            animation: 'pulse',
            loadingText: 'This item is actually loading...',
        }),
    ],
    exports: [
        FilterPipe,
        FormsModule,
        MaterialModule,
        NgxWhatsNewModule,
        ReactiveFormsModule,
        TranslateModule,
    ],
})
export class SharedModule {}
