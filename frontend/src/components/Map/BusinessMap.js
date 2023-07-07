import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import { getBusiness } from "../../store/businessReducer";
import "./BusinessMap.css";

export default function BusinessMap({ business }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "nope",
  });

  const center = useMemo(() => ({
    lat: parseFloat(business.latitude),
    lng: parseFloat(business.longitude),
  }), [business.latitude, business.longitude]);

  const markerPosition = useMemo(() => ({
    lat: parseFloat(business.latitude),
    lng: parseFloat(business.longitude),
  }), [business.latitude, business.longitude]);

  const history = useHistory();

  const handleMarkerClick = () => {
    history.push(`/businesses/${business.id}`);
  };

  if (!isLoaded) return <div>Loading...</div>;
  if (loadError) return <div>Error loading maps, check your API key</div>;

  return (
    <div className="business-map-container">
      <GoogleMap zoom={17} center={center} mapContainerClassName="business-map-container">
        <Marker
          position={markerPosition}
          onClick={handleMarkerClick}
        />
      </GoogleMap>
    </div>
  );
}
