import { z } from 'zod';

const emergencyContactInformationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Name must be a string',
    required_error: 'Name is required',
  }),
  relationship: z.string({
    invalid_type_error: 'Relationship must be a string',
    required_error: 'Relationship is required',
  }),
  phone: z.string({
    invalid_type_error: 'Phone must be a string',
    required_error: 'Phone is required',
  }),
});

const healthAndSafetySchema = z.object({
  body: z.object({
    healthDeclaration: z.boolean({
      invalid_type_error: 'Health Declaration must be a boolean',
      required_error: 'Health Declaration is required',
    }),
    emergencyContactInformation: emergencyContactInformationSchema,
    medicalConditions: z.string({
      invalid_type_error: 'Medical Conditions must be a string',
      required_error: 'Medical Conditions are required',
    }),
    email: z.string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    }),
  }),
});

const healthAndSafetyUpdateSchema = z.object({
  body: z.object({
    healthDeclaration: z
      .boolean({
        invalid_type_error: 'Health Declaration must be a boolean',
        required_error: 'Health Declaration is required',
      })
      .optional(),
    emergencyContactInformation: emergencyContactInformationSchema.optional(),
    medicalConditions: z
      .string({
        invalid_type_error: 'Medical Conditions must be a string',
        required_error: 'Medical Conditions are required',
      })
      .optional(),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
      })
      .optional(),
  }),
});

export const healthAndSafetyValidation = {
  healthAndSafetySchema,
  healthAndSafetyUpdateSchema,
};
