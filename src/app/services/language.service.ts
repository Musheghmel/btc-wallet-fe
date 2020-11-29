import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from './storage.service';
// import {UserService} from './user.service';


@Injectable()
export class LanguageService {
    currentLang: BehaviorSubject<any> = new BehaviorSubject({});
    defaultLang: string = 'en';
    currentLangId: string;
    languageIds: string[] = [];
    languagesList: any = [
        {
            'id': 'hy',
            'name': 'Հայերեն',
            'img': 'assets/images/flags/hy.svg',
        },
        {
            'id': 'en',
            'name': 'English',
            'img': 'assets/images/flags/en.svg',
        },
        /*{
            'id': 'ru',
            'name': 'Русский',
            'img': 'assets/images/flags/ru.svg',
        },*/
    ];

    constructor(public translate: TranslateService,
                private storage: StorageService,
                /*private userService: UserService*/
    ) {
        this.getLangIds();
        this.init();
    }

    init(): void {
        const storageLang: string = this.storage.getItem('lang');
        const browserLang: string = this.translate.getBrowserLang();

        if (storageLang && this.languageIds.includes(storageLang)) {
            this.currentLangId = storageLang;
        } else if (browserLang && this.languageIds.includes(browserLang)) {
            this.currentLangId = browserLang;
        } else {
            this.currentLangId = this.defaultLang;
        }

        this.setLanguage(this.currentLangId);
    }

    getLangIds(): void {
        for (const lang of this.languagesList) {
            this.languageIds.push(lang.id);
        }
    }

    setLanguage(lang: string): void {
        this.currentLangId = lang;
        this.storage.setItem('lang', lang);
        this.translate.use(lang);
        const langObj = this._getCurrentLangObj(lang);
        this.currentLang.next(langObj);
        this.setUserLang();
    }

    setUserLang(): void {
        const userId = this.storage.getItem('userId');
        if (!userId) {
            return;
        }
        /*this.userService.setUserLanguage(this.currentLangId)
            .subscribe(
                (result) => {},
                (err) => {}
            );*/
    }

    getLanguages(): any {
        return this.languagesList;
    }

    getLanguage(): Observable<any> {
        return this.currentLang;
    }

    _getCurrentLangObj(langId: string): any {
        for (const lang of this.languagesList) {
            if (langId === lang.id) {
                return lang;
            }
        }
    }

}
