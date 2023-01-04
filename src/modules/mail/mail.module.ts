import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>('mailer.host'),
          service: 'gmail',
          secure: false,
          auth: {
            user: configService.get<string>('mailer.email'),
            pass: configService.get<string>('mailer.password'),
          },
        },
        defaults: {
          from: `HealTouch <${configService.get<string>('mailer.email')}>`,
        },
        template: {
          dir: path.join(path.resolve(), 'src/templates/'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
