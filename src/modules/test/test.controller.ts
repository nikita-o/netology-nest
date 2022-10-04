import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('test')
@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  except() {
    this.testService.except();
  }
}
