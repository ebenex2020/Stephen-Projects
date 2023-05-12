import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputHandler = e => this.setState({ term: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state.term);
  };

  render() {
    return (
      <div className=" search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              onChange={this.onInputHandler}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
