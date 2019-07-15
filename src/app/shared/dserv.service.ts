import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DservService {

  private messageSource = new BehaviorSubject('default artist');
  private messageSource2 = new BehaviorSubject('default track');
  private messageSource3 = new BehaviorSubject('default cover');
  private messageSource4 = new BehaviorSubject('default preview');
  currentMessage = this.messageSource.asObservable(); //artist
  currentMessage2 = this.messageSource2.asObservable(); //track
  currentMessage3 = this.messageSource3.asObservable(); //cover
  currentMessage4 = this.messageSource4.asObservable(); //previewLink

  artistname:string;
  track:string;
  previewlink:string;
  coverlink:string;

  constructor() { }



  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log("service1 called with ",message);
  }

  changeMessage2(message: string){
    this.messageSource2.next(message);
    console.log("service2 called with ", message);
  }

  changeMessage3(message: string){
    this.messageSource3.next(message);
    console.log("service2 called with ", message);
  }
  
  changeMessage4(message: string){
    this.messageSource4.next(message);
    console.log("service2 called with ", message);
  }


}