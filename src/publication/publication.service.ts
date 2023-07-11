import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publication.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly repository: PublicationRepository) {}

  async create(createPublicationDto: CreatePublicationDto) {
    return await this.repository.addPublication(createPublicationDto);
  }

  async findAll(userId: number) {
    return await this.repository.findAll(userId);
  }
}
