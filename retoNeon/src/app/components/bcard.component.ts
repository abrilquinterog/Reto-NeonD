import { Component } from '@angular/core';

@Component({
    selector: 'bcard',
    template:  `<div class="cont">
    <img src="https://i.postimg.cc/FFqQKgzQ/photo1657811791.jpg">
    <div class="row mb-3 font-weight-bold">
    <div class="col-4">Assignees</div>
    <div class="col-4">Workflow <i class="fas fa-pen"></i></div>
    <div class="col-4"> Review Score </div>
    </div>
    <div class="row mb-3 font-weight-bold text-info">
    <div class="col-4 ">Assignees</div>
    <div class="col-4">Idea Review/PLM II</div>
    <div class="col-4">---</div>
    </div>
    </div>
    `,
    styleUrls: ['./bcard.component.css']
  })


  export class BcardComponent {
    title = 'bluecard';
  }
  
