import { PersonalInformation } from './Information.interface';
import { PersonalInformationModel } from './Information.model';

const createInformation = async (information: PersonalInformation) => {
  return await PersonalInformationModel.create(information);
};

const getSingleInformation = async (email: string) => {
  return await PersonalInformationModel.find({ email });
};

const updateInformationById = async (
  projectId: string,
  payload: Partial<PersonalInformation>,
) => {
  const result = await PersonalInformationModel.findByIdAndUpdate(
    { _id: projectId },
    payload,
  );
  return result;
};

export const informationServices = {
  createInformation,
  getSingleInformation,
  updateInformationById,
};
