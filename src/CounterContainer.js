import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>
      ADD 1
    </button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>
      REMOVE 1
    </button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterComponent);