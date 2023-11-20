export interface UserSummary {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  address: string;
  phoneNumber: string;
}

export class User implements UserSummary {
  // Properties
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
  address: string;
  phoneNumber: string;

  // Constructor
  constructor(
    options: {
      username?: string;
      password?: string;
      email?: string;
      firstName?: string;
      lastName?: string;
      dateOfBirth?: Date;
      address?: string;
      phoneNumber?: string;
    } = {}
  ) {
    this.username = options.username || '';
    this.password = options.password || '';
    this.email = options.email || '';
    this.firstName = options.firstName || '';
    this.lastName = options.lastName || '';
    this.dateOfBirth = options.dateOfBirth || undefined;
    this.address = options.address || '';
    this.phoneNumber = options.phoneNumber || '';
  }
}
