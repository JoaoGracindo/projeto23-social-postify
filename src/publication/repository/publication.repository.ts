import { Publication } from '@prisma/client';
import { CreatePublicationDto } from '../dto/create-publication.dto';

export abstract class PublicationRepository {
  abstract addPublication(data: CreatePublicationDto): Promise<Publication>;
  abstract findAll(userId: number): Promise<Publication[]>;
}
