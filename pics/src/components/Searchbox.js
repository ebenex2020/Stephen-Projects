import React from "react";

class SearchBox extends React.Component {
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }

  state = { term: "" };

  //First solution
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }

  // Second solution  {Arrow function} // Third Solution {Passing a callback funtion in the form }

  onFormSubmit = e => {
    e.preventDefault();

    // console.log(this.state.term);
    this.props.onSubmitForm(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="name">Image Search</label>
            <input
              id="name"
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
