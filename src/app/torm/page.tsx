"use client";

import React, { useState, useEffect } from "react";

export default function Doc() {
  const [message, setMessage] = useState("");
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    if ("getBattery" in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        setCharging(battery.charging);

        const updateChargingStatus = () => setCharging(battery.charging);

        battery.addEventListener("chargingchange", updateChargingStatus);

        return () => {
          battery.removeEventListener("chargingchange", updateChargingStatus);
        };
      });
    }
  }, []);

  return (
    <div className="container">
      <button className="btn" onClick={() => setMessage("Bonjour")}>
        Coucou
      </button>
      <p className="message">{message}</p>
      <div className="battery-status">
        <h2>Statut de la batterie</h2>
        <p>
          {charging
            ? "Le téléphone est en charge 🔌"
            : "Le téléphone n'est pas en charge 🔋"}
        </p>
      </div>
    </div>
  );
}
