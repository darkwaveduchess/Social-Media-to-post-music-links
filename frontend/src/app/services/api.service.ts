import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  get(resource: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/' + resource).then(response => {
        response.text().then(responseText => {
          resolve(JSON.parse(responseText));
        }).catch(reject);
      }).catch(reject);
    })
  }

  post(resource: string, data?: any) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/' + resource, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      }).then(response => {
        response.text().then(responseText => {
          resolve(responseText);
        }).catch(reject);        
      }).catch(reject);
    });
  }
}
