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
    this.http.get(`${environment.API_URL}/questions?order=desc&sort=activity&tagged=${this.search}&site=stackoverflow`).subscribe({
        next: (data: any) => {
          this.list = data
          console.log(data)
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
