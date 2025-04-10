import { Component, OnInit } from '@angular/core';
import { img } from '../../../datatype';
import { ImgService } from '../service/img.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
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
