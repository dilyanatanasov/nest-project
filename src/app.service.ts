import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): object[] {
    return [
      {
        id: 1,
        name: 'test',
      },
    ];
  }

  async createUser() {
    const user = {
      app_metadata: {
        consents: {
          privacy: { accepted: false, accepted_date: null, version: '1.1' },
          terms: { accepted: false, accepted_date: null, version: '1.3' },
        },
        legalEntities: [1],
        legalEntity: 1,
        legalEntityUrls: ['dsada'],
      },
      connection: 'Covantis-Username-Password-Authentication',
      email: 'test44@gmail.com',
      email_verified: true,
      family_name: 'Dido',
      given_name: 'test',
      password: '@A-ddlf45RT%',
    };
    try {
      const response: AxiosResponse = await lastValueFrom(
        this.httpService.post(
          'https://example.com',
          {
            ...user,
          },
          {
            headers: {
              authorization: 'Bearer ',
            },
          },
        ),
      );
      console.log({ response });
    } catch (e) {
      console.log(e);
    }
  }
}
