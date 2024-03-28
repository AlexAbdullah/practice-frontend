import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  private readonly apiUrl = 'https://localhost:7245/HelloWorld';

  public GetMessage() {
    return this.httpClient.get(this.apiUrl, { responseType: 'text' });
  }
}
