import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [BoardsModule, UsersModule, BoardModule, UserModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
