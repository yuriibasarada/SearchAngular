import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http: HttpClient){}

  isLoading = true
  question: any

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.http.get(`${environment.API_URL}/questions/${params['id']}`, {
        params: {
          sort: 'activity',
          site: 'stackoverflow',
          filter: '!nKzQUR3Egv'
        }
      }).subscribe({
        next: (data: any) => {
          this.isLoading = false
          this.question = data
        },
        error: error => {
          this.isLoading = false
          console.log(error)
        }
      })
    })
  }

}
