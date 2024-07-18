import { HealthAndSafety } from './HealthSafety.interface';
import { HealthAndSafetyModel } from './HealthSafety.model';

const createHealthSafety = async (HealthSafety: HealthAndSafety) => {
  return await HealthAndSafetyModel.create(HealthSafety);
};

const getSingleHealthSafety = async (email: string) => {
  return await HealthAndSafetyModel.find({ email });
};

const updateHealthSafetyById = async (
  projectId: string,
  payload: Partial<HealthAndSafety>,
) => {
  const result = await HealthAndSafetyModel.findByIdAndUpdate(
    { _id: projectId },
    payload,
  );
  return result;
};

export const HealthSafetyServices = {
  createHealthSafety,
  getSingleHealthSafety,
  updateHealthSafetyById,
};
