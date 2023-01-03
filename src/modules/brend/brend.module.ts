import { Module } from '@nestjs/common';
import { BrendController } from './brend.controller';
import { BrendService } from './brend.service';

@Module({
  controllers: [BrendController],
  providers: [BrendService]
})
export class BrendModule {}
