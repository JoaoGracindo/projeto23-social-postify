import {
    IsString,
    IsNotEmpty,
    IsDateString,
    IsUrl,
} from 'class-validator'

export class CreatePublicationDto {

@IsNotEmpty()
@IsUrl()
image: string

@IsNotEmpty()
@IsString()
title: string

@IsNotEmpty()
@IsString()
text

@IsNotEmpty()
@IsDateString()
dateToPublish: string

@IsNotEmpty()
@IsString()
socialMedia: string
}
