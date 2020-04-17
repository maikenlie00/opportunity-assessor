import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemesService, Themes } from './theme.service';


@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  host: {
    'class': 'app-theme-switcher'
  },
  encapsulation: ViewEncapsulation.None
})
export class ThemeSwitcherComponent implements OnInit {

  isDarkTheme = false;

  constructor(private themesService: ThemesService) {
    this.themesService.themeChanged.subscribe(newTheme => {
      this.isDarkTheme = newTheme === Themes.Dark;
    });
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themesService.currentTheme === Themes.Dark;
  }

  onThemeChange(): void {
    this.themesService.switchTheme(this.isDarkTheme ? Themes.Dark : Themes.Light);
  }

  _onButtonClick() {
    this.isDarkTheme = !this.isDarkTheme;
    this.onThemeChange();
  }
}
