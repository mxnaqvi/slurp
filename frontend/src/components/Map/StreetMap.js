import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import { getBusinesses } from "../../store/businessReducer";
import "./style.css";

export default function StreetMap() {
  const businesses = useSelector(getBusinesses);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "nope",
  });

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return <div>Error loading maps, check your API key</div>;

  return (
    <div>
      <Map businesses={businesses} />
    </div>
  );
}

function Map({ businesses }) {
  const center = useMemo(() => ({ lat: 40.671450, lng: -73.963673 }), []);
  const history = useHistory();

  const markerPositions = useMemo(
    () =>
      Array.isArray(businesses)
        ? businesses.map((business) => ({
            lat: parseFloat(business.latitude),
            lng: parseFloat(business.longitude),
            id: business.id,
          }))
        : [],
    [businesses]
  );

  const handleMarkerClick = (businessId) => {
    history.push(`/businesses/${businessId}`);
  };

  return (
    <div className="map-container">
      <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
        {markerPositions.map((position, index) => (
          <Marker
            key={index}
            position={position}
            onClick={() => handleMarkerClick(position.id)}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
