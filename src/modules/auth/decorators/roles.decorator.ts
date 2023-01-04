import { SetMetadata } from '@nestjs/common';

import { userRoles } from '../../../infra/shared/enum';

export const ROLES_KEY = 'ROLES_KEY';
export const Roles = (...roles: userRoles[]) => SetMetadata(ROLES_KEY, roles);
