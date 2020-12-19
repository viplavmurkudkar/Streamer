import React from 'react';
import { Field, reduxForm } from 'redux-form'; //Field is a react component, reduxForm is a func

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    //called with the values inside our form
    // event.preventDefault(); handled by handleSubmit
    this.props.onSubmit(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
//handleSubmit is available in the props obj. provided by ReduxForm. handleSubmit calls our callback function with formValues

const validate = (formValues) => {
  //called when form is initially rendered or user interacts with it
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title'; //same as the name we provided to our field props
  }

  if (!formValues.description) {
    errors.description = 'Please provide a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm', //all the vals for this form are stored on a 'streamCreate' field inside of the form reducer
  validate,
})(StreamForm);

// const formWrapped = reduxForm({
//   form: 'streamCreate', //all the vals for this form are stored on a 'streamCreate' field inside of the form reducer
//   validate,
// })(StreamForm); // reduxForm returns a function and we immediately call that with StreamCreate(similar to connect)

// export default connect(null, { createStream })(formWrapped);
