import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      gender: '',
      age: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const errors = {};
    if (!this.state.nickname) errors.nickname = 'Никнейм обязателен';
    if (!this.state.email) errors.email = 'Email обязателен';
    if (!this.state.gender) errors.gender = 'Пол обязателен';
    if (!this.state.age || this.state.age < 0) errors.age = 'Возраст обязателен';
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('Форма отправлена', this.state);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="nickname"
          value={this.state.nickname}
          onChange={this.handleChange}
          placeholder="Ник"
        />
        {this.state.errors.nickname && <span>{this.state.errors.nickname}</span>}
        
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        {this.state.errors.email && <span>{this.state.errors.email}</span>}
        
        <select name="gender" onChange={this.handleChange}>
          <option value="">Выберите пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        {this.state.errors.gender && <span>{this.state.errors.gender}</span>}
        
        <input
          type="number"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Возраст"
        />
        {this.state.errors.age && <span>{this.state.errors.age}</span>}
        
        <button type="submit">Зарегистрироваться</button>
      </form>
    );
  }
}

export default RegistrationForm;
