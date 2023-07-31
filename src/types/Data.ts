import { IconName } from '~/components';

export type StatusName = 'Disputed' | 'Finalized' | 'Unanswered';

export interface RequestData {
  description: string;
  id: string;
  createdAt: string;
  requester: string;
  status: StatusName;
  transaction: string;
}

export interface Filter {
  text?: string;
  icon?: IconName;
}

export interface Modules {
  name: string;
  description: string;
  address: string;
}
