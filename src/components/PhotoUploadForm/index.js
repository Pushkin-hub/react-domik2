import React, { Component } from 'react';

class PhotoUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      email: '',
      photo: null,
      description: '',
      tags: '',
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value, files } = e.target;
    this.setState({ [name]: name === 'photo' ? files[0] : value });
  };

  validate = () => {
    const errors = {};
    if (!this.state.nickname) errors.nickname = 'Никнейм обязателен';
    if (!this.state.password) errors.password = 'Пароль обязателен';
    if (!this.state.email) errors.email = 'Email обязателен';
    if (!this.state.photo) errors.photo = 'Фотография обязательна';
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
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Пароль"
        />
        {this.state.errors.password && <span>{this.state.errors.password}</span>}
        
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        {this.state.errors.email && <span>{this.state.errors.email}</span>}
        
        <input
          type="file"
          name="photo"
          onChange={this.handleChange}
        />
        {this.state.errors.photo && <span>{this.state.errors.photo}</span>}
        
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Описание фотографии"
        />
        
        <input
          type="text"
          name="tags"
          value={this.state.tags}
          onChange={this.handleChange}
          placeholder="Теги"
        />
        
        <button type="submit">Загрузить</button>
      </form>
    );
  }
}

export default PhotoUploadForm;
