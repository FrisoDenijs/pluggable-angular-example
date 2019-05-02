import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WidgetConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  private readonly url = 'widgets-repo/widgets.config.json';

  getWidgetConfigs(): Observable<WidgetConfig[]> {
    return this.http.get<WidgetConfig[]>(this.url);
  }
}
