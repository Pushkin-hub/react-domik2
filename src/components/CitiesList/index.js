import React from 'react';

const cities = [
  { name: 'Москва', population: '12.5 млн' },
  { name: 'Санкт-Петербург', population: '5.4 млн' },
  { name: 'Новосибирск', population: '1.6 млн' },
];

const CitiesList = () => {
  return (
    <div>
      <h1>Города России</h1>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            {city.name} - Население: {city.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitiesList;
