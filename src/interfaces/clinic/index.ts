import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  location?: string;
  clinic_revenue?: string;
  clinc_id?: string;

  user_clinic_user_idTouser?: UserInterface;
  user_clinic_clinc_idTouser?: UserInterface;
  _count?: {};
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
  location?: string;
  clinic_revenue?: string;
  clinc_id?: string;
}
