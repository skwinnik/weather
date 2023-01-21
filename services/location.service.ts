//
// purely client side service, can't be used in server side code
//
export interface ILocation {
  longitude: number;
  latitude: number;
}
export function getCurrentLocation() {
  if (!window || !navigator)
    throw new Error("Looks like this code is running in a server environment");
  return new Promise<ILocation>((resolve, reject) => {
    const savedLocation = getSavedLocation();
    if (savedLocation) {
      resolve(savedLocation);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        } as ILocation;
        localStorage.setItem("location", JSON.stringify(location));
        resolve(location);
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export function getSavedLocation(): ILocation | null {
  if (!window || !localStorage)
    throw new Error("Looks like this code is running in a server environment");
  const location = localStorage.getItem("location");
  if (location) return JSON.parse(location);
  return null;
}
