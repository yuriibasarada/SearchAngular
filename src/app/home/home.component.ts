import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  search = ''
  list: any
  isLoading = false

  async searchHandler() {
    this.isLoading = true
    this.http.get(`${environment.API_URL}/questions`, {
      params: {
        tagget: this.search,
        site: 'stackoverflow',
        sort: 'activity',
        filter: '!2JhtlT1p_(DM0(9ODK)Co_EviwCdbEUaQP3a*IZwPYGvrZN8Pnz37xWZbezrjvuD*Y__Lof0xxCjq'
      }
    }).subscribe({
        next: (data: any) => {
          this.list = data
          this.isLoading = false
        },
        error: error => {
          console.log(error)
          this.isLoading = false
        }
      })
  }

  ngOnInit(): void {}


}
