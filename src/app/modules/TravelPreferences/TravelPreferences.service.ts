import { TravelPreferences } from './TravelPreferences.interface';
import { TravelPreferencesModel } from './TravelPreferences.model';

const createTravelPreferences = async (
  TravelPreferences: TravelPreferences,
) => {
  return await TravelPreferencesModel.create(TravelPreferences);
};

const getSingleTravelPreferences = async (email: string) => {
  return await TravelPreferencesModel.find({ email });
};

const updateTravelPreferencesById = async (
  projectId: string,
  payload: Partial<TravelPreferences>,
) => {
  const result = await TravelPreferencesModel.findByIdAndUpdate(
    { _id: projectId },
    payload,
  );
  return result;
};

export const TravelPreferencesServices = {
  createTravelPreferences,
  getSingleTravelPreferences,
  updateTravelPreferencesById,
};
