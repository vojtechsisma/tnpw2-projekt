import { ApiHideProperty } from '@nestjs/swagger';
import { Post } from 'src/posts/entities/post.entity';

export class User {
  id: number;

  email: string;

  @ApiHideProperty()
  password: string;

  posts?: Post[];

  createdAt: Date;

  updatedAt: Date;
}
