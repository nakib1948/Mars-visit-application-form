import { Schema, model } from 'mongoose';
import { TravelPreferences } from './TravelPreferences.interface';

const travelPreferencesSchema = new Schema<TravelPreferences>({
  departureDate: {
    type: String,
    required: true,
  },
  returnDate: {
    type: String,
    required: true,
  },
  accommodationPreference: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialRequests: {
    type: String,
    required: true,
  },
});

export const TravelPreferencesModel = model<TravelPreferences>('TravelPreferences', travelPreferencesSchema);
