import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { travelPreferencesValidation } from './TravelPreferences.validation';
import { TravelPreferencesControllers } from './TravelPreferences.controller';

const router = express.Router();

router.post(
  '/createHealthSafety',
  auth(),
  validateRequest(travelPreferencesValidation.travelPreferencesSchema),
  TravelPreferencesControllers.createTravelPreferences,
);

router.get(
  '/:email',
  auth(),
  TravelPreferencesControllers.getSingleTravelPreferences,
);
router.patch(
  '/updateTravelPreferencesById/:id',
  auth(),
  validateRequest(travelPreferencesValidation.travelPreferencesUpdateSchema),
  TravelPreferencesControllers.updateTravelPreferencesById,
);

export const TravelPreferencesRoutes = router;
