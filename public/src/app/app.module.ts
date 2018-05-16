import { NgModule, Component, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

class SearchItem {
  constructor(public name: string,
  public artist: string,
  public link: string,
  public thumbnail: string,
  public artistId: string) {
  }
}

@Injectable()
class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiUrl)
      .toPromise()
      .then(
        res => {
          // console.log(res.json());
          this.results = res.json().results.map( item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve();
        },
        msg => {
          reject();
        }
      );
    });
    return promise;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
class AppComponent {
  private loading = false;
  constructor(private itunes: SearchService) {

  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then( () => this.loading = false);
  }
}



@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [SearchService]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);
