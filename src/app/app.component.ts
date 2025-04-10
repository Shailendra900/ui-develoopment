import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgService } from './service/img.service';
import { img, ImgResponse } from '../../datatype';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ui_develoopment';
  allImg:img |undefined;

  constructor(private imgservice:ImgService){}

  ngOnInit(): void {
    this.imgservice.getImg().subscribe((res)=>{
      console.log(this.allImg);
      this.allImg=res.img[0];
    })
  }
}

