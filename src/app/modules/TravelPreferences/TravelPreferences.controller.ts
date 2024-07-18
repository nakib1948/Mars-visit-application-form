import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TravelPreferencesServices } from './TravelPreferences.service';

const createTravelPreferences = catchAsync(async (req, res) => {
  const result = await TravelPreferencesServices.createTravelPreferences(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TravelPreferences created succesfully',
    data: result,
  });
});
const getSingleTravelPreferences = catchAsync(async (req, res) => {
  const result = await TravelPreferencesServices.getSingleTravelPreferences(
    req.params.email,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TravelPreferences are retrieved successfully',
    data: result,
  });
});
const updateTravelPreferencesById = catchAsync(async (req, res) => {
  const result = await TravelPreferencesServices.updateTravelPreferencesById(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TravelPreferences is updated successfully',
    data: result,
  });
});

export const TravelPreferencesControllers = {
  createTravelPreferences,
  getSingleTravelPreferences,
  updateTravelPreferencesById,
};
