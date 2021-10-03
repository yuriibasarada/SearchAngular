import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Angular_one_color_inverse_logo.svg/1200px-Angular_one_color_inverse_logo.svg.png'
    }, 3000)
  }

  title = 'My Cart Title'
  text = 'My simple text'

  imgUrl = 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg'

  getInfo() {
    return 'This is my info'
  }
}
