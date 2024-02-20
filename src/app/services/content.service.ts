import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private HttpClient: HttpClient) {}
  banner(): Observable<any> {
    return this.HttpClient.get('https://api.npoint.io/fee177346e7875554413');
  }
}
