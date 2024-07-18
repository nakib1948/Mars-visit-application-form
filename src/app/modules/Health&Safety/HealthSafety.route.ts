import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { healthAndSafetyValidation } from './HealthSafety.validation';
import { HealthAndSafetyControllers } from './HealthSafety.controller';

const router = express.Router();

router.post(
  '/createHealthSafety',
  auth(),
  validateRequest(healthAndSafetyValidation.healthAndSafetySchema),
  HealthAndSafetyControllers.createHealthSafety,
);

router.get('/:email', auth(), HealthAndSafetyControllers.getSingleHealthSafety);
router.patch(
  '/updateHealthSafetyById/:id',
  auth(),
  validateRequest(healthAndSafetyValidation.healthAndSafetyUpdateSchema),
  HealthAndSafetyControllers.updateHealthSafetyById,
);

export const HealthAndSafetyRoutes = router;
