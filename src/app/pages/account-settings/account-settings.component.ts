import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingservice: SettingsService) { }

  ngOnInit(): void {
    this.settingservice.checkCurrentTheme();
  }

  // tslint:disable-next-line: typedef
  changeColor(theme: string){
    this.settingservice.changeColor(theme);


  }



}
