import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { KnowledgeBaseService } from './knowledge-base.service';
import { FuseKnowledgeBaseComponent } from './knowledge-base.component';
import { FuseKnowledgeBaseArticleComponent } from './dialogs/article/article.component';
import { AdalGuard } from 'adal-angular4';

const routes = [
    {
        path     : 'knowledge-base',
        component: FuseKnowledgeBaseComponent,
        canActivate: [AdalGuard],
        resolve  : {
            knowledgeBase: KnowledgeBaseService
        }
    }
];

@NgModule({
    declarations   : [
        FuseKnowledgeBaseComponent,
        FuseKnowledgeBaseArticleComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,

        FuseSharedModule
    ],
    providers      : [
        KnowledgeBaseService
    ],
    entryComponents: [
        FuseKnowledgeBaseArticleComponent
    ]
})
export class KnowledgeBaseModule
{
}
