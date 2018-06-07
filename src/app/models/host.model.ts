export type HostStatus = 'online' | 'offline';

export interface Host {
  id: string;
  created: Date;
  hostName: string;
  status: HostStatus;
}
