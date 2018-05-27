import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationTurkish } from './navigation/i18n/tr';

import { AdalService } from 'adal-angular4';
import { environment } from 'environments/environment';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private translate: TranslateService,
        private fuseNavigationService: FuseNavigationService,
        private fuseSplashScreen: FuseSplashScreenService,
        private fuseTranslationLoader: FuseTranslationLoaderService,
        private adalService: AdalService
    )
    {
        adalService.init(environment.config);
        
        // Add languages
        this.translate.addLangs(['en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Set the navigation translations
        this.fuseTranslationLoader.loadTranslations(navigationEnglish, navigationTurkish);

        // Use a language
        this.translate.use('en');
    }
}
