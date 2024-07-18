import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { HealthSafetyServices } from './HealthSafety.service';

const createHealthSafety = catchAsync(async (req, res) => {
  const result = await HealthSafetyServices.createHealthSafety(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HealthSafety created succesfully',
    data: result,
  });
});
const getSingleHealthSafety = catchAsync(async (req, res) => {
  const result = await HealthSafetyServices.getSingleHealthSafety(req.params.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HealthSafety are retrieved successfully',
    data: result,
  });
});
const updateHealthSafetyById = catchAsync(async (req, res) => {
  const result = await HealthSafetyServices.updateHealthSafetyById(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'HealthSafety is updated successfully',
    data: result,
  });
});

export const HealthAndSafetyControllers = {
  createHealthSafety,
  getSingleHealthSafety,
  updateHealthSafetyById,
};
