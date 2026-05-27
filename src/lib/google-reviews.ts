import 'server-only';
import { unstable_cache } from 'next/cache';

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
}

export interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export const getGoogleReviews = unstable_cache(
  async (): Promise<PlaceDetails | null> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return null;
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=tr&key=${apiKey}`;

    try {
      const res = await fetch(url, { next: { revalidate: 86400 } });
      const data = await res.json();
      if (data.status !== 'OK') {
        console.error('Google Places error:', data.status);
        return null;
      }
      return data.result as PlaceDetails;
    } catch (e) {
      console.error('Google Reviews fetch failed:', e);
      return null;
    }
  },
  ['google-reviews'],
  { revalidate: 86400 }
);
