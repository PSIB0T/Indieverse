import { HttpClient } from '@angular/common/http';
// ./src/app/music/shared/api.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    clientId = 'WSHQEBO9PuA7NSFJj2TDNMLoJaoP2tG2'

    constructor(
      private http: HttpClient
    ) {}

    get(url, attachClientId?) {
      // Should attach client id if the attachToken
      // is true
      let u;
      attachClientId ? u = this.prepareUrl(url) : u = url;
      // Returns an obsrevable
      // for the HTTP get request
      return this.http.get(u);
    }

    prepareUrl(url) {
      return `${url}?client_id=${this.clientId}`
    }

}
