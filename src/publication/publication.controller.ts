import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { User } from 'src/auth/decorator/user.decorator';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';

@UseGuards(AuthGuard)
@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  create(@Body() createPublicationDto: CreatePublicationDto, @User() user) {
    return this.publicationService.create({
      ...createPublicationDto,
      userId: user.id,
    });
  }

  @Get()
  findAll(@User() user) {
    return this.publicationService.findAll(user.id);
  }
}
