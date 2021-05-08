import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup } from "react-transition-group";

function Result(props) {
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You are probably<strong>{props.quizResult}</strong>!
      </div>
    </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
