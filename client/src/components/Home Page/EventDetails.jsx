import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as eventsAPI from "../../API/eventsAPI.js";

import formatEventDateTime from "../../util/formatEventDate.js";

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function fetchEvent() {
      try {
        const data = await eventsAPI.getEventById(eventId);

        setEvent(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvent();
  }, [eventId]);

  const venue = event.venue;
  console.log(event);
  //console.log(event.link);

  const { month, day, time } = formatEventDateTime("2024-09-25 08:00:00");

  return (
    <div className="min-h-screen py-24 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-4 text-base">
      <div className="relative">
        <img
          src={event.thumbnail}
          alt={event.name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
          <h1 className="text-4xl font-bold">{event.name}</h1>
          <p className="text-lg">
            {month} {day}, {new Date(event.start_time).getFullYear()}
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-full p-4">
        <nav className="text-gray-500 my-4">
          <span>Event</span> &gt; <span>{event.venue?.timezone}</span> &gt;{" "}
          <span className="text-gray-900">{event.name}</span>
        </nav>
        <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
        <p className="text-gray-600 mb-4">
          {event.category} - {event.subcategory}
        </p>
        <p className="text-gray-800 whitespace-pre-line">{event.description}</p>
        {event.venue && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Venue Details</h3>
            <p className="text-gray-800">{event.venue.name}</p>
            <p className="text-gray-600">
              {event.venue.street_number} {event.venue.street},{" "}
              {event.venue.city}, {event.venue.country}
            </p>
            <p className="text-gray-600">Phone: {event.venue.phone_number}</p>
            <p className="text-gray-600">
              Website:{" "}
              <a
                className="text-primary-600"
                href={event.venue.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.venue.website}
              </a>
            </p>
            <p className="text-gray-600">
              Get your ticket:{" "}
              <a
                className="text-primary-600"
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {event.link}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
