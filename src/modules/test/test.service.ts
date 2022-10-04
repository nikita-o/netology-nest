import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  except() {
    throw new BadRequestException();
  }
}
