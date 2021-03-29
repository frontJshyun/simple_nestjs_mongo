import { Test, TestingModule } from '@nestjs/testing';
import { PerceivedService } from './perceived.service';

describe('PerceivedService', () => {
  let service: PerceivedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerceivedService],
    }).compile();

    service = module.get<PerceivedService>(PerceivedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
