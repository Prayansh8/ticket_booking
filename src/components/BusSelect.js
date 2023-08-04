// BusSelect.js
import React, { useState } from 'react';
import busData from '../busData.json';
import './BusSelect.css'; // Import your CSS file for additional styling

const BusSelect = () => {
  const [selectedStartLocation, setSelectedStartLocation] = useState('');
  const [selectedEndLocation, setSelectedEndLocation] = useState('');
  const [selectedBus, setSelectedBus] = useState(null);

  const handleStartLocationChange = (event) => {
    setSelectedStartLocation(event.target.value);
    setSelectedBus(null);
  };

  const handleEndLocationChange = (event) => {
    setSelectedEndLocation(event.target.value);
    setSelectedBus(null);
  };

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
  };

  const handleBookTicket = () => {
    if (selectedBus) {
      const whatsappLink = `https://wa.me/916265323177?text=I want to book a ticket for ${selectedBus.name}`;
      window.open(whatsappLink, '_blank');
    }
  };

  const filteredBuses = busData.buses.filter(
    (bus) =>
      bus.startLocation === selectedStartLocation &&
      bus.endLocation === selectedEndLocation
  );

  return (
    <div className="container bg-light p-4 rounded">
      <h2 className="mb-4">Bus Ticket Booking</h2>
      <div className="mb-3">
        <label htmlFor="startLocation" className="form-label">
          Start Location:
        </label>
        <select
          id="startLocation"
          className="form-select"
          value={selectedStartLocation}
          onChange={handleStartLocationChange}
        >
          <option value="">Select Start Location</option>
          {busData.locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="endLocation" className="form-label">
          End Location:
        </label>
        <select
          id="endLocation"
          className="form-select"
          value={selectedEndLocation}
          onChange={handleEndLocationChange}
        >
          <option value="">Select End Location</option>
          {busData.locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      {selectedStartLocation && selectedEndLocation && (
        <div className="available-buses mt-4">
          <h3>Available Buses:</h3>
          <ul className="list-group">
            {filteredBuses.map((bus) => (
              <li key={bus.id} className="list-group-item d-flex justify-content-between align-items-center">
                {bus.name}
                <button className="btn btn-primary" onClick={() => handleBusSelect(bus)}>
                  Select Bus
                </button>
              </li>
            ))}
          </ul>
          {selectedBus && (
            <div className="selected-bus p-3 mt-4 bg-white rounded">
              <h4>Selected Bus:</h4>
              <p>{selectedBus.name}</p>
              <button className="btn btn-success" onClick={handleBookTicket}>
                Book Ticket on WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusSelect;
