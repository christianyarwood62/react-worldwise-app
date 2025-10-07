import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      // This is the successCallback function, it runs if the browser successfully gets user's position
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      // This is the second argument, it is the errorCallback function, so it only runs if the browser gets something wrong
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { position, getPosition, isLoading, error };
}
