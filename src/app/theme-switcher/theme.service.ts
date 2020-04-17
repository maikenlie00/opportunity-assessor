import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Themes {
    Light = 'Light',
    Dark = 'Dark',
}

export const themeConfig = new Map<Themes, string[]>([
    [
        Themes.Light,
        [
            '/assets/styles/dls-mat-light-theme.css',
            '/assets/styles/app-light-theme.css',
        ]
    ],
    [
        Themes.Dark,
        [
            '/assets/styles/dls-mat-dark-theme.css',
            '/assets/styles/app-dark-theme.css',
        ]
    ],
]);

@Injectable({
    providedIn: 'root',
})
export class ThemesService {
    readonly themeChanged: BehaviorSubject<string>;
    protected documentReference: Document;

    private _currentTheme: Themes = Themes.Light;

    get currentTheme(): string {
        return this._currentTheme;
    }

    constructor() {
        this.documentReference = document;
        this.themeChanged = new BehaviorSubject<string>(this._currentTheme);
    }

    switchTheme(name: Themes): void {
        this._currentTheme = name;
        this.switchStyleSheets(this._currentTheme);
        this.themeChanged.next(this._currentTheme);
    }

    private switchStyleSheets(name: Themes) {
        if (!themeConfig.has(name)) {
            return;
        }

        // current theme config
        const config = [...themeConfig.get(name)];

        // Get all stylesheets marked with 'theme' class
        const sheets = Array.from(
            this.documentReference.getElementsByTagName('link')
        ).filter(l => l.rel.includes('stylesheet') && l.className === 'theme');

        config.forEach(link => {
            const style = sheets.shift() || this.addStyleSheet();
            style.href = `${link}`;
        });

        sheets.forEach(it => it.remove());
    }

    private addStyleSheet(): HTMLLinkElement {
        const style = this.documentReference.createElement('link');
        style.rel = 'stylesheet';
        style.className = 'theme';
        this.documentReference.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
}
