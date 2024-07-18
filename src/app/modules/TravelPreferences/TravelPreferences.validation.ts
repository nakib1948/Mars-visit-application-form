import { z } from 'zod';

const travelPreferencesSchema = z.object({
  body: z.object({
    departureDate: z.string({
      invalid_type_error: 'Departure Date must be a string',
      required_error: 'Departure Date is required',
    }),
    returnDate: z.string({
      invalid_type_error: 'Return Date must be a string',
      required_error: 'Return Date is required',
    }),
    accommodationPreference: z.string({
      invalid_type_error: 'Accommodation Preference must be a string',
      required_error: 'Accommodation Preference is required',
    }),
    specialRequests: z.string({
      invalid_type_error: 'Special Requests must be a string',
      required_error: 'Special Requests are required',
    }),
    email: z.string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    }),
  }),
});

const travelPreferencesUpdateSchema = z.object({
  body: z.object({
    departureDate: z
      .string({
        invalid_type_error: 'Departure Date must be a string',
        required_error: 'Departure Date is required',
      })
      .optional(),
    returnDate: z
      .string({
        invalid_type_error: 'Return Date must be a string',
        required_error: 'Return Date is required',
      })
      .optional(),
    accommodationPreference: z
      .string({
        invalid_type_error: 'Accommodation Preference must be a string',
        required_error: 'Accommodation Preference is required',
      })
      .optional(),
    specialRequests: z
      .string({
        invalid_type_error: 'Special Requests must be a string',
        required_error: 'Special Requests are required',
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

export const travelPreferencesValidation = {
  travelPreferencesSchema,
  travelPreferencesUpdateSchema,
};
