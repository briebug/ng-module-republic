import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Cell } from '@bba/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CellsService {
  model = 'cells';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Cell[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Cell>(this.getUrlWithId(id));
  }

  create(cell: Cell) {
    return this.http.post(this.getUrl(), cell);
  }

  update(cell: Cell) {
    return this.http.put(this.getUrlWithId(cell.id), cell);
  }

  delete(cell: Cell) {
    return this.http.delete(this.getUrlWithId(cell.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}