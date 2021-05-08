import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <h2 className="question" style={{display:"flex",background:"#99ffcc",height:"50px",alignContent:"center"}}>{props.content}</h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
