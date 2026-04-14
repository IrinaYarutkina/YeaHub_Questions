export type SpecializationResponse = {
  id: number;
  title: string;
  description: string;
  slug?: string;
};

export type SpecializationsApiResponse = {
  data: SpecializationResponse[];
  page: number;
  limit: number;
  total: number;
};