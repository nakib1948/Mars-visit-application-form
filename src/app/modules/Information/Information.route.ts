import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { personalInformationValidation } from './Information.validation';
import { InformationControllers } from './Information.controller';

const router = express.Router();

router.post(
  '/createInformation',
  auth(),
  validateRequest(personalInformationValidation.personalInformationSchema),
  InformationControllers.createInformation,
);

router.get('/:email',auth(), InformationControllers.getSingleInformation);
router.patch(
  '/updateInformationById/:id',
  auth(),
  validateRequest(personalInformationValidation.personalInformationUpdateSchema),
  InformationControllers.updateInformationById,
);


export const InformationRoutes = router;
