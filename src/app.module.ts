import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { CategoryModule } from './modules/category/category.module';
import { SubCategoryModule } from './modules/sub-category/sub-category.module';
import { BrendModule } from './modules/brend/brend.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MailModule } from './modules/mail/mail.module';

import configuration from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    CategoryModule,
    SubCategoryModule,
    BrendModule,
    ProductModule,
    AuthModule,
    UserModule,
    MailModule,
  ],
})
export class AppModule {}
