export type EmergencyContactInformation = {
  name: string;
  relationship: string;
  phone: string;
};

export type HealthAndSafety = {
  healthDeclaration: boolean;
  emergencyContactInformation: EmergencyContactInformation;
  medicalConditions: string;
  email: string;
};
