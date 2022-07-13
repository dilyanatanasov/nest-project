import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {
  }

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
          'https://disposable-dev.eu.auth0.com/api/v2/users',
          {
            ...user,
          },
          {
            headers: {
              authorization:
                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Il9TSVVMS3lyXy1YaFFUQjJLbDJxNyJ9.eyJpc3MiOiJodHRwczovL2Rpc3Bvc2FibGUtZGV2LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJ0cmFtVWZ3aTZMN241cTlJVFJzR0pLQUcxdUpSanJIQ0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kaXNwb3NhYmxlLWRldi5ldS5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY1NzA5NjM0MywiZXhwIjoxNjU3MTgyNzQzLCJhenAiOiJ0cmFtVWZ3aTZMN241cTlJVFJzR0pLQUcxdUpSanJIQyIsInNjb3BlIjoicmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDpyb2xlcyB1cGRhdGU6aG9va3MgdXBkYXRlOm1mYV9wb2xpY2llcyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmhvb2tzIHVwZGF0ZTpwcm9tcHRzIHVwZGF0ZTpicmFuZGluZyByZWFkOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgY3JlYXRlOmxvZ19zdHJlYW1zIGRlbGV0ZTpsb2dfc3RyZWFtcyB1cGRhdGU6bG9nX3N0cmVhbXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.mPH6W_T_eghJNuJZYhzyRk3bvZSmTry53ZEc8XnFwTxZ08nrApnsxvTBi85Y_eYjcr63yFsX3tqto__cMnS2eeDSEXEVAQAh28p0QNXzLIePxGTlHBL8PjMB424eDEAQBmsgGuAO6cZA5_EQhMiqlPgUNOIXtQ1HPaJWPDJd0U32mUurg-4KXBXsY0BAwVcgzfVTG_u42FmmlrJm4gNTFey_31xGsMH02OXGGDaplVug5CTQ_Ex06G2RppRZ8BsLe6RXJlTOVD0b3n6i7h204hYbljc3u_neo3I0i2EQuOkjYY6SGaJWz8TGeQs9R9JnC5MZLdfU9zpTatGIxsjkNw',
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
