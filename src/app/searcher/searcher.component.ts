import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ItunesService } from '../shared/itunes.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {RouterModule, Router} from '@angular/router'
import {DservService} from '../shared/dserv.service';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  providers: [ItunesService],
  styleUrls: ['./searcher.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class SearcherComponent implements OnInit {

  searchResults: Array<any> = [];

  searchTerm="";
  showTable=false;
  showDetails=false;
  values="";
  searchStatus="Please enter a filer";

  currentTrack="";
  currentArtist="";
  currentCover="";
  currentPreview="";
  currentTrackId="";
  
  constructor(private itunesService: ItunesService,
              private _router: Router,
              private data: DservService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.currentArtist = message);
    this.data.currentMessage2.subscribe(message => this.currentTrack = message);
    this.data.currentMessage3.subscribe(message => this.currentCover = message);
    this.data.currentMessage4.subscribe(message => this.currentPreview = message);
    
  }
  

  
  onKeyPress(event: any) 
  {
    console.log('key pressed called');
    this.values = event.target.value;
    console.log(this.values);
    this.searchTerm=this.values;
    if(this.searchTerm!="")
    {
      this.searchStatus="Searching..."
    }
    this.itunesService.search(this.searchTerm).then(results => {
      this.searchResults = results;
    });
    this.searchStatus="Results found: ";
    this.showTable=true;

  };

  btnClick(event,tid,tname,artist,cover,previewLink)
  {
    this.showTable=false;
    this.currentArtist=artist;
    this.currentCover=cover;
    this.currentPreview=previewLink;
    this.currentTrackId=tid;
    this.currentTrack=tname;
    this.data.changeMessage(this.currentArtist);
    this.data.changeMessage2(this.currentTrack);
    this.data.changeMessage3(this.currentCover);
    this.data.changeMessage4(this.currentPreview);
    this._router.navigate([tid]);
    console.log("details of tid: "+tid);

  };

  backBtn()
  {
    this.showDetails=false;
    this.showTable=true;
  };

}
