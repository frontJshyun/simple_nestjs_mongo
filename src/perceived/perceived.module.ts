import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerceivedController } from './perceived.controller';
import { PerceivedSchema } from './perceived.model';
import { PerceivedService } from './perceived.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Perceived', schema: PerceivedSchema }])],
  controllers: [PerceivedController],
  providers: [PerceivedService]
})
export class PerceivedModule {}
