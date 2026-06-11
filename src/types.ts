// Types for the booking system
export interface BirthDetails {
  name: string;
  gender: string;
  email: string;
  whatsapp: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  consultationTopic: "marriage" | "career" | "business" | "finance" | "dosha" | "temple" | "general";
  specificConcerns: string;
  preferredDate: string;
  preferredTimeSlot: string;
}

export interface BookingResponse {
  success: boolean;
  bookingId: string;
  chartDetails?: {
    lagna: string;
    rashi: string;
    nakshatra: string;
    rulingPlanet: string;
    keyObservation: string;
  };
}

export interface FrequentlyAskedQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  consultationType: string;
  date: string;
  text: string;
  avatarUrl?: string;
  verified: boolean;
}

export interface YoutubeVideoItem {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnailUrl: string;
  tag: string;
  youtubeUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  iconName: string;
  benefits: string[];
}

export interface RemedyAnswer {
  doshaState: string;
  primaryPlanet: string;
  recommendedTemple: {
    name: string;
    location: string;
    deity: string;
    remedyRitual: string;
    historySignificance: string;
  };
  remedyPrasad: string;
  astroAdvice: string;
}
