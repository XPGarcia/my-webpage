import { ronSanMiguel } from './projects/ronSanMiguel';
import { proalco } from './projects/proalco';
import { livet } from './projects/livet';
import { findThePuppet } from './projects/findThePuppet';
import { prometeoShop } from './projects/prometeoShop';
import { web1001carros } from './projects/web1001carros';
import { kiosk1001carros } from './projects/kiosk1001carros';
import { toyotaGoTrivia } from './projects/toyotaGoTrivia';
import { Project } from '@/src/types';

export type ProjectKey =
  | 'proalco'
  | 'livet'
  | 'findThePuppet'
  | 'prometeoShop'
  | 'ronSanMiguel'
  | 'web1001carros'
  | 'kiosk1001carros'
  | 'toyotaGoTrivia';

export const projects: Record<ProjectKey, Project> = {
  web1001carros,
  kiosk1001carros,
  toyotaGoTrivia,
  ronSanMiguel,
  proalco,
  livet,
  findThePuppet,
  prometeoShop
};
