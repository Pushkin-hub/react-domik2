import React, { Component } from 'react';

class PersonalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Иван Иванов',
      phone: '123-456-7890',
      email: 'ivan@example.com',
      city: 'Москва',
      originalData: {
        name: 'Иван Иванов',
        phone: '123-456-7890',
        email: 'ivan@example.com',
        city: 'Москва',
      },
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetData = () => {
    this.setState({
      ...this.state.originalData,
    });
  };

  render() {
    return (
      <div>
        <h1>Персональная страница</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="ФИО"
        />
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="Телефон"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          placeholder="Город"
        />
        <button onClick={this.resetData}>Сбросить</button>
      </div>
    );
  }
}

export default PersonalPage;