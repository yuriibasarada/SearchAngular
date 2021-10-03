import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card = {title: '', text: ''}
  @Input() index: number = 0

  cardDate: Date = new Date()
  title = 'My Cart Title'
  text = 'My simple text'
  textColor: string = ''



  ngOnInit() {

  }

  changeTitle() {
    this.card.title = 'Title was changed'
  }

  changeHandler() {
    console.log(this.title)
  }


}
