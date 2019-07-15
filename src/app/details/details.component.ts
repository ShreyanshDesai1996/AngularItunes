import { Component, OnInit, Input } from '@angular/core';
import {DservService} from '../shared/dserv.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  currentArtist:string;
  currentTrack:string;
  currentCover:string;
  currentPreview:string;
   

  constructor(private data: DservService, private location: Location) {
    console.log("Details constructor");
    
    
  }

  ngOnInit() {
    console.log("Details init")
    this.data.currentMessage.subscribe(message => this.currentArtist = message);
    this.data.currentMessage2.subscribe(message => this.currentTrack = message);
    
    this.data.currentMessage3.subscribe(message => this.currentCover = message);
    this.data.currentMessage4.subscribe(message => this.currentPreview = message);
  }

  backBtn()
  {
    this.location.back();
  }

  


}
