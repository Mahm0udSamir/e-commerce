import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { RequestUser } from '../types/request-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject<RequestUser>({ username: null, password: null });

  setUserData(user: RequestUser) {
    this.user$.next(user);
  }

  get isLogin() {
    return this.user$.asObservable().pipe(
      map((user) => {
        return !!user?.username;
      })
    );
  }

  get isLAdmin() {
    return this.user$.asObservable().pipe(
      map((user) => {
        return user.username === 'admin';
      })
    );
  }
}
