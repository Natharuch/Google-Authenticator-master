import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Client/src/app/models/User';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public loginUserFromRemote(user: User): Promise<any> {
    return new Promise((res, rej) => {
      this.http.post(`http://localhost:4200/login`, user, { responseType: 'text' })
        .subscribe(data => {
          console.log(data);
          res(data)
        }),
        (err: any) => rej(err)
    });
  }

  public signUp(user: User): Promise<any> {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:4200/new', user, { responseType: 'text' })
        .subscribe(data => {
          console.log(data);
          res(data);
        },
          data => rej(data.ok))

    });
  }

  public getUser(): Promise<any> {
    return new Promise((res, rej) => {
      this.http.get('http://localhost:4200/name', { responseType: 'text' })
        .subscribe(data => {
          console.log(data);
          res(data);
        },
          data => rej(data.ok))

    });
  }

  public logOut(): Promise<any> {
    return new Promise((res, rej) => {
      this.http.post(`http://localhost:4200/logout`, { responseType: 'text' })
        .subscribe(data => res(data)),
        (err: any) => rej("error")
    });
  }

  public getQRCode(): Promise<any> {
    return new Promise((res, rej) => {
      this.http.get('http://localhost:4200/2fa', { responseType: 'text' })
        .subscribe(data => {
          console.log("qr code" + data);
          res(data);
        },
          data => rej(data.ok))

    });
  }

  public verifyQRCode(code: String, username: string): Promise<any> {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:4200/verify', { code: code, username: username }, { responseType: 'text' })
        .subscribe(data => {
          console.log(data);
          res(data);
        },
          data => {
            console.log(data);
            rej(data.ok)
          })

    });
  }



}
