
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  image?: string;
  category: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: number;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingFormData {
  service: string;
  stylist: string;
  date: Date | undefined;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}
