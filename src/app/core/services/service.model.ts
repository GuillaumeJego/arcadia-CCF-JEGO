export interface ServiceModel {
  service_id: number;
  nom: string;
  description: string;
  image: string;
  imageUrl?: string;
  conclusion: string;
  groupe_service_id: number;
}