import { Exclude } from 'class-transformer';
import { ApiHideProperty } from '@nestjs/swagger';

import { Post } from 'src/posts/entities/post.entity';

export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  id: number;

  email: string;

  @Exclude()
  @ApiHideProperty()
  password: string;

  @ApiHideProperty()
  posts?: Post[];

  createdAt: Date;

  updatedAt: Date;
}
