import { role } from '../constant/pageConstant';

// Auth State
export interface IAuth {
  username: string;
  role: role;
  nrp: string;
}
