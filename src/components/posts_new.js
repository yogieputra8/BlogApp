import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          {...field.input}
          type="text" className="form-control"
         />
      </div>
    );
  }


  render() {
    return (
      <form>
        <br />
        <h3>Create A New Post</h3>
        <Field
          label="Title"
          name="title" component={this.renderField}
         />
        <Field
          label="Categories"
          name="categories"  component={this.renderField}
         />
        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}


export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
