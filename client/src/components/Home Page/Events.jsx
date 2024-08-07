import * as eventsAPI from "../../API/eventsAPI.js";
import formatEventDateTime from "../../util/formatEventDate.js";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await eventsAPI.getEvents();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <h2 className="px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
        See all upcoming crypto events in Europe
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 py-2 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
        {events.map((event) => {
          const { month, day, time } = formatEventDateTime(event.start_time);
          //console.log(event.event_id);
          
          return (
            <div
              key={event.id}
              className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden my-8 flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <img
                    className="w-full h-40 object-cover"
                    src={event.thumbnail}
                    alt={event.name}
                  />
                  <div className="absolute top-0 left-0 bg-primary-700 text-white py-2 px-4 rounded-tr-lg">
                    <p className="text-sm">{month.slice(0, 3)}</p>
                    <p className="text-xl font-bold">{day}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-2xl font-semibold">{event.name}</h2>
                  <p className="text-gray-600">
                    {month} {day} | {time}
                  </p>
                  <p className="text-gray-800 mt-2">{event.summary}</p>
                </div>
              </div>
              <div className="p-4 mt-auto">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <svg
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 64 64"
                    >
                      <g>
                        <path
                          fill="#075985"
                          d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64   s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14   s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"
                        />
                        <path
                          fill="#075985"
                          d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34   c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"
                        />
                      </g>
                    </svg>
                    {event.venue.timezone}
                  </div>
                  <Link
                    to={`/events/${event.event_id}`}
                    className="inline-flex font-medium items-center text-primary-600 hover:underline"
                  >
                    See details
                    <svg
                      className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
