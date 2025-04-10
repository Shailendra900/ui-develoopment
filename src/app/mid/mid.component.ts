import { Component, OnInit } from '@angular/core';
import { img } from '../../../datatype';
import { ImgService } from '../service/img.service';

@Component({
  selector: 'app-mid',
  standalone: true,
  imports: [],
  templateUrl: './mid.component.html',
  styleUrl: './mid.component.css'
})
export class MidComponent implements OnInit{
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
