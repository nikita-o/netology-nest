import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from '../../schemas/book.schema';

@Controller()
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  create(@Body() data: CreateBookDto): Promise<Book> {
    return this.booksService.create(data);
  }

  @Get(':id')
  read(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.read(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateBookDto,
  ): Promise<void> {
    await this.booksService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.booksService.remove(id);
  }
}
