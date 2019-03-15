export type HostStatus = 'online' | 'offline';

export interface Host {
  id: string;
  name: string;
  hostName: string;
  status: HostStatus;
}
