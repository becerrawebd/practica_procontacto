import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { InfoDto } from './types/Info';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/info')
  @UsePipes(new ValidationPipe({ transform: true }))
  async postInfo(@Body() info: InfoDto) {
    const response = await this.appService.postInfo(info);
    return response.data;
  }
}
