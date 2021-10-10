import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  @Input() answer: any

  ngOnInit(): void {}

}
