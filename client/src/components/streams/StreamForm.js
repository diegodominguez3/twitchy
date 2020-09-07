import React from 'react'; 
import {Field, reduxForm} from 'redux-form'; 
import {Link} from 'react-router-dom'; 

class StreamForm extends React.Component {
  renderError({error, touched}) {
    const errorStyles = {
      marginTop: '8px'
    }
    if(touched && error) {
      return (
          <div className="ui mini error message" style={errorStyles}>
            <b>{error}</b>
          </div>
      );
    }
  }

  renderInput = ({input, label, placeholder, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input type="text" {...input} placeholder={placeholder} autoComplete="off"/>
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues); 
  };

  render() {
    return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
      <Field name="title" component={this.renderInput} label="Enter Title" placeholder="Title"/>
      <Field name="description" component={this.renderInput} label="Enter Description" placeholder="Description"/>
      <button className="ui button primary">Submit</button>
      <Link to="/" className="ui button" style={{marginLeft: '10px'}}>Cancel</Link>
    </form>
    ); 
  }
}

const validate = (formValues) => {
  const errors = {}; 
  if(!formValues.title){
    errors.title = 'You must enter a title'; 
  }
  if(!formValues.description){
    errors.description = 'You must enter a description'; 
  }
  return errors;
};

 export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm); 