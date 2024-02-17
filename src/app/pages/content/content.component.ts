import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCetJ59EgIQO-TxKag7PMaKo42MUyg0R-xSQ&usqp=CAU"
  contentTitle: string = "Seja bem vindo ao nosso blog de notícias!"
  contentDescription: string = ""
  private id: string ="0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    )
  }

}
