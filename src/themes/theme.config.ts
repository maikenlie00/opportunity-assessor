import { SlbThemingOptions } from '@slb-dls/angular-material/core';

export enum Themes {
    Light = 'light',
    Dark = 'dark',
}

export const themeConfig: SlbThemingOptions = {
    defaultTheme: 'light',
    classMap: new Map<string, string[]>([
        [
            Themes.Light,
            [ 'material-theme-light' ]
        ],
        [
            Themes.Dark,
            [ 'material-theme-dark' ]
        ],
    ]),
    stylesheetMap: new Map<string, string[]>([
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
    ])
};
