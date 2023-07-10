import {
    IsString,
    IsNotEmpty,
    IsDateString,
    IsUrl,
    IsInt,
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

@IsNotEmpty()
@IsInt()
userId: number
}
