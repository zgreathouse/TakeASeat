import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // navLink() {
  //   if (this.props.formType === 'login') {
  //     return <Link to="/signup">sign up instead</Link>;
  //   } else {
  //     return <Link to="/login">log in instead</Link>;
  //   }
  // }

  renderErrors() {
    const { errors } = this.props;

    if (!errors) {
      return null
    }

    const allErrors = errors.map( (error, index) => (
      <li key={index}>{error}</li>
    ));

    return allErrors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, { user: this.state });
    this.props.processForm(user);
  }

  render() {
    const { formType } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
          <h2>{formType}</h2>

          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                onChange={this.update('username')}
                value={this.state.username}/>
            </label>
            <br/>
            <label>Password:
              <input type="password"
                onChange={this.update('password')}
                value={this.state.password}/>
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
            <br/>
          {this.renderErrors()}
        </form>
    )
  }
}

export default SessionForm;
