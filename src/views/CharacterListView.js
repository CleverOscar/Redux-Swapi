import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { swapiActionCreator } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.swapiActionCreator()
  }

  render() {
    if (this.props.isFetching) {
      <h1>Fetching</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
})

export default connect(
  mapStateToProps,
  { swapiActionCreator }
)(CharacterListView);
