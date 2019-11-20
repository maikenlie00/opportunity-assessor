import { Component, OnInit } from '@angular/core';
import { ThemesService, Themes } from './theme.service';


@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
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

  onThemeChange(event: any): void {
    this.themesService.switchTheme(this.isDarkTheme ? Themes.Dark : Themes.Light);
  }
}
