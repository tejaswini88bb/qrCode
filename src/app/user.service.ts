import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private isUserLoggedIn;
    public username;
    
  constructor(private http:Http) {
      this.isUserLoggedIn = false;
  }
  fetchData() {
    return this.http.get('http://localhost:3000/products').map((res:Response) => res.json());
  }    
    setUserLoggedIn(username){
        this.isUserLoggedIn = true;
        this.username = username;
        return username;
        
    }
    getUserLoggedIn(){
        return this.isUserLoggedIn;
    }

}
