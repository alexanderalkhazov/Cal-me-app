import { clean, createToken } from '../../common';
const moment = require('moment-timezone');
export class FirstService {

  // tslint:disable-next-line:no-null-keyword
  async authenticate(email: string, password: string, name: string = 'Joe Doe', expirationHours: number = 2) {
    const data: any = {};
    data.accessToken = createToken(clean({
      name,
      email,
      password,
      expiration: moment().add(expirationHours, 'hours'),
    }));
    return ({success: true, data, msg: 'login OK' });
  }
}
