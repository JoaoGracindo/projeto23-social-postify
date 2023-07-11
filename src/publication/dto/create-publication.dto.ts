import {
    IsString,
    IsNotEmpty,
    IsUrl,
    MaxLength,
    IsDateString,
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
text: string

@IsNotEmpty()
@MaxLength(10)
@IsDateString()
dateToPublish: string

@IsNotEmpty()
@IsString()
socialMedia: string

userId: number
}
