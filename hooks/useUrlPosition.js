import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat"); // searchParams and get looks into the URL, the get string has to match what is in the URL.
  const lng = searchParams.get("lng");

  return [lat, lng];
}
