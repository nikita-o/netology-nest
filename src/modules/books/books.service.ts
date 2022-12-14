import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from '../../schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(data: CreateBookDto): Promise<Book> {
    return await this.bookModel.create(data);
  }

  read(id: string): Promise<Book | null> {
    return this.bookModel.findById(id).exec();
  }

  async update(id: string, data: UpdateBookDto): Promise<void> {
    await this.bookModel.findByIdAndUpdate(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.bookModel.findByIdAndDelete(id);
  }
}
