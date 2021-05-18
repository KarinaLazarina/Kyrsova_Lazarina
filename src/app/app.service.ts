import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getDataForSidebar(): Observable<any> {
    return this.http.get('./assets/data/dataForSidebar.json');
  }

  getDataForFLMain(): Observable<any> {
    return this.http.get('./assets/data/dataForFirstLineInMain.json');
  }

  getDataForPB(): Observable<any> {
    return this.http.get('./assets/data/dataForProgressBar.json');
  }

  getDataForTable(): Observable<any> {
    return this.http.get('./assets/data/dataForTable.json');
  }

  getDataForHeader(): Observable<any> {
    return this.http.get('./assets/data/dataForHeader.json');
  }
}
