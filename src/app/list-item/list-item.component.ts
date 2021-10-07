import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  answers = []
  isLoading = false

  async displayAnswers() {
    this.isLoading = true
    this.http.get(`${environment.API_URL}/questions/${this.item.question_id}/answers?order=desc&sort=activity&site=stackoverflow`).subscribe({
      next: (data: any) => {
        this.answers = data
        console.log(data)
        this.isLoading = false
      },
      error: error => {
        console.log(error)
        this.isLoading = false
      }
    })
  }

}
