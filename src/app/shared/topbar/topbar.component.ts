import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public toggled = false;
  @Output() toggleValue = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public toggleChange() {
    this.toggled = !this.toggled;
    this.toggleValue.emit(this.toggled);
  }

}
