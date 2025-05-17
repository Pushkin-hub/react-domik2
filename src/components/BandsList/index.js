import React, { Component } from 'react';

const bands = [
  { name: 'Мумий Тролль', genre: 'Рок' },
  { name: 'Кино', genre: 'Панк' },
  { name: 'Земфира', genre: 'Поп' },
];

class BandsList extends Component {
  render() {
    return (
      <div>
        <h1>Мои любимые музыкальные группы</h1>
        <ul>
          {bands.map((band, index) => (
            <li key={index}>
              {band.name} - Жанр: {band.genre}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BandsList;
