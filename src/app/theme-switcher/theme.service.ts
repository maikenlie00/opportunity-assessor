import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Themes {
    Light = 'Light',
    Dark = 'Dark',
}

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
        this.switchStyleSheets(name);
        this.themeChanged.next(name);
    }

    private switchStyleSheets(name: string) {
        // Get all stylesheets that have a title attribute
        const sheets = Array.from(
            this.documentReference.getElementsByTagName('link')
        ).filter(l => l.rel.includes('stylesheet') && l.title);

        // Check if any stylesheets contain the name: if not, don’t change
        if (sheets.find(s => s.title.includes(name))) {
            // Disable all stylesheets except for the ones with the specified name
            sheets.forEach(s => {
                s.disabled = !s.title.includes(name);
            });
        }
    }
}
