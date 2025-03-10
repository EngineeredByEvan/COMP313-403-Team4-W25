import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { type User } from '../data/models/user.model';
import { UserRoleEnum } from '../data/enums/UserRoleEnum';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  users = [
    {
      employeeNumber: 'EMP000',
      employeeId: { $oid: 'mongoid0' },
      name: 'Admin User',
      email: 'admin@admin.com',
      phone: '000-000-0000',
      password: 'admin',
      role: UserRoleEnum.Admin,
      department: 'Administration',
      createdAt: { $date: new Date().toISOString() },
    },
    {
      employeeNumber: 'EMP001',
      employeeId: { $oid: 'mongoid1' },
      name: 'Employee One',
      email: '1@1.com',
      phone: '111-111-1111',
      password: '1',
      role: UserRoleEnum.Employee,
      department: 'Engineering',
      createdAt: { $date: new Date().toISOString() },
    },
    {
      employeeNumber: 'EMP002',
      employeeId: { $oid: 'mongoid2' },
      name: 'HR Representative',
      email: '2@2.com',
      phone: '222-222-2222',
      password: '2',
      role: UserRoleEnum.HR,
      department: 'Human Resources',
      createdAt: { $date: new Date().toISOString() },
    },
    {
      employeeNumber: 'EMP003',
      employeeId: { $oid: 'mongoid3' },
      name: 'HR Manager',
      email: 'hr1@company.com',
      phone: '333-333-3333',
      password: 'hr1',
      role: UserRoleEnum.HR,
      department: 'Human Resources',
      createdAt: { $date: new Date().toISOString() },
    },
  ];

  loggedInUser!: User;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private apiService: ApiService
  ) {}

  authenticateUser(email: string, password: string): Observable<boolean> {
    return this.apiService.login(email, password).pipe(
      map((user) => {
        if (user) {
          // Only set localStorage in browser environment
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.loggedInUser = user;
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Login failed', error);
        return of(false);
      })
    );
  }

  // Helper to maintain backward compatibility
  private getUserTypeFromRole(role: UserRoleEnum): string {
    switch (role) {
      case UserRoleEnum.Admin:
        return 'admin';
      case UserRoleEnum.HR:
        return 'hr';
      case UserRoleEnum.Employee:
        return 'employee';
      default:
        return 'employee';
    }
  }

  getLoggedInUser(): User | null {
    // If we already have the logged-in user in memory, return it
    if (this.loggedInUser) {
      return this.loggedInUser;
    }

    // Check if we're in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Only access localStorage in browser
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.loggedInUser = JSON.parse(storedUser);
        return this.loggedInUser;
      }
    }

    return null;
  }

  // Get all HR users for assignment
  getHRUsers() {
    const hrUsers = this.users.filter((user) => user.role === UserRoleEnum.HR);

    // Convert MongoDB style documents to User objects
    return hrUsers.map((user) => ({
      id: user.employeeId.$oid,
      employeeId: user.employeeId.$oid,
      employeeNumber: user.employeeNumber,
      name: user.name,
      email: user.email,
      role: UserRoleEnum.HR,
      userType: 'hr',
      department: user.department,
      createdAt: new Date(user.createdAt.$date),
    }));
  }
}
