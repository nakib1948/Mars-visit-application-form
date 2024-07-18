import { Schema, model } from 'mongoose';
import { PersonalInformation } from './Information.interface';

const contactInformationSchema = new Schema<PersonalInformation['contactInformation']>({
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const personalInformationSchema = new Schema<PersonalInformation>({
  fullName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactInformation: {
    type: contactInformationSchema,
    required: true,
  },
});

export const PersonalInformationModel = model<PersonalInformation>('PersonalInformation', personalInformationSchema);
