import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthenticateddRequest } from 'src/lib/types';
import { Post as PostType } from './entities/post.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createPostDto: CreatePostDto,
    @Req() request: AuthenticateddRequest,
  ): Promise<PostType> {
    return this.postsService.create(createPostDto, request);
  }

  @Get()
  findAll(): Promise<PostType[]> {
    return this.postsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string): Promise<PostType> {
    return this.postsService.findOne(slug);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
    @Req() request: AuthenticateddRequest,
  ): Promise<PostType> {
    return this.postsService.update(id, updatePostDto, request);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() request: AuthenticateddRequest,
  ) {
    return this.postsService.remove(id, request);
  }
}
