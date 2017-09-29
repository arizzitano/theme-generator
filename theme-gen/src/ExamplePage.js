import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

class ExamplePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export default ExamplePage;
