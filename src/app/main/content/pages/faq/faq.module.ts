import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatExpansionModule, MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FaqService } from './faq.service';
import { FuseFaqComponent } from './faq.component';
import { AdalGuard } from 'adal-angular4';

const routes = [
    {
        path     : 'faq',
        component: FuseFaqComponent,
        canActivate: [AdalGuard],
        resolve  : {
            faq: FaqService
        }
    }
];

@NgModule({
    declarations: [
        FuseFaqComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        FuseSharedModule
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
