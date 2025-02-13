"use client";

import { useBattery } from "@uidotdev/usehooks";

export default function Doc() {
  const { loading, supported, charging, chargingTime, dischargingTime } =
    useBattery();

  if (!supported) {
    return <div>Battery status is not supported on this device.</div>;
  }

  if (loading) {
    return <div>Loading battery status...</div>;
  }

  return (
    <div className="wrapper">
      <p>Charging: {charging ? "Yes" : "No"}</p>
      <p>
        Charging Time:{" "}
        {chargingTime !== Infinity ? `${chargingTime} seconds` : "N/A"}
      </p>
      <p>
        Discharging Time:{" "}
        {dischargingTime !== Infinity ? `${dischargingTime} seconds` : "N/A"}
      </p>
    </div>
  );
}
