import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth!: string;
  constructor() {}

  setAuth(auth: string) {
    this.auth = auth;
  }

  getAuth(): string {
    return this.auth;
  }
}
