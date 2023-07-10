import { PublicationRepository } from '../publication.repository';
import { Injectable } from '@nestjs/common';
import { CreatePublicationDto } from 'src/publication/dto/create-publication.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaPublication implements PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addPublication(data: CreatePublicationDto) {
    return await this.prisma.publication.create({data});
  }

  async findAll(userId: number) {
    return await this.prisma.publication.findMany({where: {userId}});
  }
}
