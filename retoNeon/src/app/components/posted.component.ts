import { Component } from '@angular/core';

@Component({
    selector: 'posted',
    template:  `
    <div class="align-self-end">
    
       <span class="d-inline p-2 text-black">Posted</span>
        <span class="d-inline p-2 font-weight-bold text-info">Anonymous User</span>

            <div class="d-inline">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star">()</i>
            <div> 

            <span class="d-inline p-2 text-black"><i class="fas fa-calendar-alt"></i>  June 27, 2019 12:00 PM</span>

    
    </div>

    `,
    styleUrls: ['./posted.component.css']
  })


  export class PostComponent {
    title = 'posted';
  }
  
