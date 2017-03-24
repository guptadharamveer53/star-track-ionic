import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SpotifyService } from '../../providers/spotify-service/spotify-service';
import { FormControl } from '@angular/forms'
@IonicPage({
  segment: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public listing = [];
  public isError: boolean = false;
  public showSpinner: boolean = false;
  public search = new FormControl();
  constructor(
    public nav: NavController,
    public spotify: SpotifyService,
    public loadingCtrl: LoadingController,

  ) {

    this.search.valueChanges
      .subscribe(
        res => console.log(res),
        () => console.log('done')
      );
  }
  detail(track) {
    this.nav.push('TrackDetailPage', {
      'id': track.id,
      'track': track
    });
  }
  // doSearch(term) {
  //   this.showSpinner = true;
  //   if (term) {
  //     this.spotify.load(term)
  //       .subscribe(
  //       results => this.listing = results.tracks.items,
  //       error => this.isError = true,
  //       () => this.showSpinner = false
  //       );
  //   } else {
  //     this.listing = [];
  //     this.showSpinner = false;
  //   }
  // }
}
