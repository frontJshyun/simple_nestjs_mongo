import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Perceived } from './perceived.model';

@Injectable()
export class PerceivedService {
  constructor(@InjectModel('Perceived') private readonly PerceivedModel : Model<Perceived>) {}

  async insertPerceived(userName: string, desc: string) {
    const newPerceived = new this.PerceivedModel({
      userName,
      description: desc,
    });
    const result = await newPerceived.save();
    return result;
  }

  async getPerceived() {
    const perceived = await this.PerceivedModel.find().exec();
    return perceived.map(perceived => ({
      id: perceived.id,
      userName: perceived.userName,
      description: perceived.description,
    }));
  }

  async deletePerceived(perceivedId: string) {
    console.log(perceivedId)
    const result = await this.PerceivedModel.deleteOne({ _id: perceivedId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find perceived.');
    }
    return true;
  }

}
