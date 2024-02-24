import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-avatar',
  templateUrl: './logo-avatar.component.html',
  styleUrls: ['./logo-avatar.component.scss']
})
export class LogoAvatarComponent implements OnInit {
  @Input() url: string = "";
  @Input() name: string = "";


  constructor() { }

  ngOnInit() {
  }

}
