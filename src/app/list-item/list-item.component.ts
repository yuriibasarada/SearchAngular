import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DisplayComponent} from "../display/display.component";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}


  async displayAnswers() {
    this.dialog.open(DisplayComponent, {
      data: this.item.answers
    });
  }

}
