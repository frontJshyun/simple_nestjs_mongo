import { Test, TestingModule } from '@nestjs/testing';
import { PerceivedController } from './perceived.controller';

describe('PerceivedController', () => {
  let controller: PerceivedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerceivedController],
    }).compile();

    controller = module.get<PerceivedController>(PerceivedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
