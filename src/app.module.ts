import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerceivedModule } from './perceived/perceived.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/perceived'), PerceivedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
