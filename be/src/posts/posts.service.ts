import slugify from 'slugify';
import { Injectable } from '@nestjs/common';

import { Post } from './entities/post.entity';
import { PrismaService } from 'src/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const data = {
      ...createPostDto,
      slug: slugify(createPostDto.title, { lower: true }),
      authorId: 1,
    };

    return this.prisma.post.create({ data });
  }

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: { author: true },
    });
  }

  findOne(slug: string): Promise<Post> {
    return this.prisma.post.findUniqueOrThrow({
      where: { slug },
      include: { author: true },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
