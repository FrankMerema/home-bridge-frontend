import {StateHistory} from './state-history.model';
import {State} from './state.enum';

export interface Switch {
  host: string;
  name: string;
  pin: number;
  state?: State;
  stateHistory?: Array<StateHistory>;
}
