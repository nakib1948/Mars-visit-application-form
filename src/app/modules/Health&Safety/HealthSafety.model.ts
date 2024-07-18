import { Schema, model } from 'mongoose';
import { HealthAndSafety } from './HealthSafety.interface';

const emergencyContactInformationSchema = new Schema<
  HealthAndSafety['emergencyContactInformation']
>({
  name: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const healthAndSafetySchema = new Schema<HealthAndSafety>({
  healthDeclaration: {
    type: Boolean,
    required: true,
  },
  emergencyContactInformation: {
    type: emergencyContactInformationSchema,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  medicalConditions: {
    type: String,
    required: true,
  },
});

export const HealthAndSafetyModel = model<HealthAndSafety>(
  'HealthAndSafety',
  healthAndSafetySchema,
);
