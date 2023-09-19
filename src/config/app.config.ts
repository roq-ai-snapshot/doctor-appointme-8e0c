interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Administrator', 'Doctor', 'Nurse', 'Receptionist', 'Patient'],
  tenantName: 'Clinic',
  applicationName: 'doctor appointment system',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read clinic information'],
  ownerAbilities: ['Manage user information', 'Manage clinic information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/11956f22-97ec-4a28-a271-9fb105e4958b',
};
