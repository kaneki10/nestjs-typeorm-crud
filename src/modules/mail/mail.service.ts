import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';

import { CreateUserDto } from '../user/dto';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService, // private readonly configService: ConfigService,
  ) {}
  async register(body: CreateUserDto & { password: string }) {
    await this.mailerService
      .sendMail({
        to: body.email,
        subject: 'HealTouch Registration',
        text: `HealTouch Registration`,
        template: path.join(path.resolve(), 'src/templates/register.pug'),
        context: {
          firstname: body.firstname,
          lastname: body.lastname,
          password: body.password,
          email: body.email,
        },
      })
      .catch((error) => {
        throw new HttpException(
          error.message || 'Error with SMTP',
          error.code || error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

    return body;
  }
}
