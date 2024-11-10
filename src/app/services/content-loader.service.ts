import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentResponse } from '../models/ContentResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {

  private source = 'assets/markdownLinks.json'

  private http = inject(HttpClient)

  getMarkdownLinks(): Observable<ContentResponse[]> {
    return this.http.get<ContentResponse[]>(this.source);
  }

  getMarkdownContent(path: string): Observable<string> {
    return this.http.get(path, { responseType: 'text' });
  }

}
