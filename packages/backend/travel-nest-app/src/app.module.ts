import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [ BoardModule, UserModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
