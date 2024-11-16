import { Injectable } from '@nestjs/common';
import { InfoDto } from './types/Info';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { PostResponse } from './types/PostResponse';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async postInfo(info: InfoDto) {
    try {
      const response = await lastValueFrom(
        this.httpService.post<PostResponse, InfoDto>(
          'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json',
          info,
        ),
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
