import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    // my modules:
    // globals:
    CommonModule,
  ],
})
export class AppModule {}
