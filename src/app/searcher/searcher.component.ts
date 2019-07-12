import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Jsonp } from '@angular/http';
import { ItunesService } from '../shared/itunes.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  providers: [ItunesService],
  styleUrls: ['./searcher.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class SearcherComponent implements OnInit {

  searchResults: Array<any> = [];
  
  constructor(private itunesService: ItunesService) { }

  ngOnInit() {
  }

  searchTerm="";
  showTable=false;
  showDetails=false;
  values="";
  searchStatus="Please enter a filer";

  currentTrack="";
  currentArtist="";
  currentCover="";
  currentPreview="";
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
    this.showTable=true;

  };

  btnClick(event,track,artist,cover,previewLink)
  {
    this.showTable=false;
    this.showDetails=true;
    this.currentArtist=artist;
    this.currentCover=cover;
    this.currentPreview=previewLink;
    this.currentTrack=track;
    console.log("clicked: "+previewLink);

  };

  backBtn()
  {
    this.showDetails=false;
    this.showTable=true;
  };

}
