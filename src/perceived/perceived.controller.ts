import { Controller,Post,Body,Get,Param,Patch,Delete,HttpStatus } from '@nestjs/common';
import { PerceivedService } from './perceived.service';

@Controller('perceived')
export class PerceivedController {
  constructor(private readonly perceivedService: PerceivedService) { }

    @Post()
    async addPercived(
        @Body('userName') userName: string,
        @Body('description') description: string,
    ) {
        const perceived = await this.perceivedService.insertPerceived(
          userName,
          description,
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'Perceived added successfully',
            data: perceived,
        };
    }

    @Get()
    async getAllPercived() {
        const perceived = await this.perceivedService.getPerceived();
        return perceived;
    }

    @Delete(':id')
    async removePerceived(@Param('id') perceivedId: string) {
        const isDeleted = await this.perceivedService.deletePerceived(perceivedId);
        if (isDeleted) {
            return {
                statusCode: HttpStatus.OK,
                message: 'Perceived deleted successfully',
            };
        }
    }
}
