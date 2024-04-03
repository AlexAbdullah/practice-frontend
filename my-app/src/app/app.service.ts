import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  private readonly apiUrl = 'https://localhost:7245/Person';

  public GetPerson(name: string) {
    return this.httpClient.get<Person>(`${this.apiUrl}/${name}`);
  }

  public CreatePerson(person: Person) {
    return this.httpClient.post(this.apiUrl, person);
  }

  public GetAllPeople(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiUrl);
  }
}
