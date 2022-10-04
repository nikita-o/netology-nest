import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './configs';
import { BooksModule } from './modules/books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [config], isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    // my modules:
    BooksModule,
    // globals:
    CommonModule,
  ],
})
export class AppModule {}
