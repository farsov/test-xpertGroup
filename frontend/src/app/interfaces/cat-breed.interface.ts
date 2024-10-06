
export interface CatBreedResponse {
  weight?: {
    imperial?: string;
    metric?: string;
  };
  id?: string;
  name?: string;
  temperament?: string;
  origin?: string;
  description?: string;
  life_span?: string;
  indoor?: number;
  image?: {
    id?: string;
    url?: string;
  };
}
