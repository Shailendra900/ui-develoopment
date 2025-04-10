import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { img, ImgResponse } from '../../../datatype';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http:HttpClient) { }

  getImg():Observable<ImgResponse >{
    return this.http.get<ImgResponse >("https://shailendra900.github.io/img_api/img.json")
  }
}
