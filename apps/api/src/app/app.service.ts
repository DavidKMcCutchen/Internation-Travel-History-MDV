import { Injectable } from '@nestjs/common';
import { Message } from '@int-travel-history/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
