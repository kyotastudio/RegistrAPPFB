import { Users } from "./user.models";
export interface Classes {
  id: string;
  name: string;
  teacher: string;
  hour: string;
  classroom: string;
  liststudents: Users[];
}
