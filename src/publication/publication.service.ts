import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';

@Injectable()
export class PublicationService {
  create(createPublicationDto: CreatePublicationDto) {
    return 'This action adds a new publication';
  }

  findAll() {
    return `This action returns all publication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }
}
