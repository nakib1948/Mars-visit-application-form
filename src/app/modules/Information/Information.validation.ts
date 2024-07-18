import { z } from 'zod';

const contactInformationSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    })
    .email({ message: 'Invalid email address' }),
  phone: z.string({
    invalid_type_error: 'Phone must be a string',
    required_error: 'Phone is required',
  }),
});

const personalInformationSchema = z.object({
  body: z.object({
    fullName: z.string({
      invalid_type_error: 'Full Name must be a string',
      required_error: 'Full Name is required',
    }),
    dateOfBirth: z.string({
      invalid_type_error: 'Date of Birth must be a string',
      required_error: 'Date of Birth is required',
    }),
    nationality: z.string({
      invalid_type_error: 'Nationality must be a string',
      required_error: 'Nationality is required',
    }),
    email: z.string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    }),
    contactInformation: contactInformationSchema,
  }),
});

const personalInformationUpdateSchema = z.object({
  body: z.object({
    fullName: z
      .string({
        invalid_type_error: 'Full Name must be a string',
        required_error: 'Full Name is required',
      })
      .optional(),
    dateOfBirth: z
      .string({
        invalid_type_error: 'Date of Birth must be a string',
        required_error: 'Date of Birth is required',
      })
      .optional(),
    nationality: z
      .string({
        invalid_type_error: 'Nationality must be a string',
        required_error: 'Nationality is required',
      })
      .optional(),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
      })
      .optional(),
    contactInformation: contactInformationSchema.optional(),
  }),
});

export const personalInformationValidation = {
  personalInformationSchema,
  personalInformationUpdateSchema,
};
