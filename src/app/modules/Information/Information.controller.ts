import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { informationServices } from './Information.service';

const createInformation = catchAsync(async (req, res) => {
  const result = await informationServices.createInformation(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information created succesfully',
    data: result,
  });
});
const getSingleInformation = catchAsync(async (req, res) => {
  const result = await informationServices.getSingleInformation(req.params.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information are retrieved successfully',
    data: result,
  });
});
const updateInformationById = catchAsync(async (req, res) => {
  const result = await informationServices.updateInformationById(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Information is updated successfully',
    data: result,
  });
});

export const InformationControllers = {
  createInformation,
  getSingleInformation,
  updateInformationById,
};
