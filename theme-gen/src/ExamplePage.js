import React from 'react';
import classNames from 'classnames';
import ReactHtmlParser from 'react-html-parser';

import theme from '@edx/edx-bootstrap/sass/open-edx/_theme.scss';

class ExamplePage extends React.Component {
  render() {
    console.log(theme);
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export default ExamplePage;
