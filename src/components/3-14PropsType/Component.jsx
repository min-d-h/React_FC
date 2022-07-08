import React from 'react'
import PropTypes from 'prop-types'

function PropsComponent(props) {
  return <div>{props.name}</div>;
}

PropsComponent.defaultProps = {
  name: "akakak",
  age: 8,
}

PropsComponent.propsTypes = {
  name: PropTypes.string,
  age: function(props, propName, componentName) {
    if (!/(7|8)/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + 
        propName + 
        '` supplied to' +
        ' `' + 
        componentName + 
        '`. Validation failed.'
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropsComponent />
    </div>
  )
}
