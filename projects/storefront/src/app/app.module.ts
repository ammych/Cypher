import { NgModule } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll, Event } from '@angular/router';

// modules (angular)
import { BrowserModule } from '@angular/platform-browser';
// modules (third-party)
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
// modules
import { AppRoutingModule } from './app-routing.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { FakeApiModule } from './api';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';
import { SlideshowModule } from './modules/slideshow/slideshow.module';
import { LanguageModule } from './modules/language/language.module';
import { MobileModule } from './modules/mobile/mobile.module';
import { SharedModule } from './modules/shared/shared.module';
import { SidenavModule } from './modules/sidenav/sidenav.module';

// components
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { HomeComponent } from './components/home/home.component';

// pages
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        // components
        AppComponent,
        RootComponent,
		HomeComponent,
        // pages
        PageNotFoundComponent,
    ],
    imports: [
        // modules (angular)
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        // modules (third-party)
        ModalModule.forRoot(),
        ToastrModule.forRoot(),
        TooltipModule.forRoot(),
		PopoverModule.forRoot(),
        TranslateModule.forChild(),
        // modules
        AppRoutingModule,
        CurrencyModule.config({
            default: 'USD',
            currencies: [
                {
                    symbol: '$',
                    name: 'US Dollar',
                    code: 'USD',
                    rate: 1,
                },
                {
                    symbol: '£',
                    name: 'Pound Sterling',
                    code: 'GBP',
                    rate: 0.78,
                },
                {
                    symbol: '€',
                    name: 'Euro',
                    code: 'EUR',
                    rate: 0.92,
                },
                {
                    symbol: '₽',
                    name: 'Russian Ruble',
                    code: 'RUB',
                    rate: 64,
                    formatFn: (value) => {
                        const digits = [].slice.call(Math.round(value).toFixed()).reverse();
                        const parts = [];

                        while (digits.length) {
                            parts.push(digits.splice(0, 3).reverse().join(''));
                        }

                        return parts.reverse().join(' ') + ' руб';
                    },
                },
            ],
        }),
        FakeApiModule,
        FooterModule,
		SlideshowModule,
		HeaderModule,
        LanguageModule.config({
            default: 'en',
            languages: [
                {
                    code: 'en',
                    name: 'English',
                    image: 'assets/images/languages/language-1.png',
                    direction: 'ltr',
                },
                {
                    code: 'ru',
                    name: 'Russian',
                    image: 'assets/images/languages/language-2.png',
                    direction: 'ltr',
                },
                {
                    code: 'en-RTL',
                    name: 'RTL',
                    image: 'assets/images/languages/language-3.png',
                    direction: 'rtl',
                },
            ],
        }),
        MobileModule,
        SharedModule,
		SidenavModule,
    ],
})
export class AppModule {
    constructor(router: Router, viewportScroller: ViewportScroller) {
        router.events.pipe(
            filter((e: Event): e is Scroll => e instanceof Scroll),
        ).subscribe(e => {
            if (e.position) {
                viewportScroller.scrollToPosition(e.position);
            } else if (!e.anchor) {
                viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }
}
