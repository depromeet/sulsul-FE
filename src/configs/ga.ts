export const gaMeasurementId: string =
  (process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID : '') ?? '';
