import React from 'react';
import classNames from 'classnames';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

import course from '@edx/edx-bootstrap/samples/edx/course.html';
import dashboard from '@edx/edx-bootstrap/samples/edx/dashboard.html';
import register from '@edx/edx-bootstrap/samples/edx/register.html';
import search from '@edx/edx-bootstrap/samples/edx/search.html';

import ExamplePage from './ExamplePage';

const parseHtml = (html) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, "text/html");
  return ReactHtmlParser(htmlDoc.querySelector('body').innerHTML);
}

const pages = {
  course: parseHtml(course),
  dashboard: parseHtml(dashboard),
  register: parseHtml(register),
  search: parseHtml(search),
};

class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: 'course',
    };
  }

  onButtonSelect(key) {
    this.setState({
      selectedPage: key,
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid p-3">
          <div className="btn-group" role="group" aria-label="Select a page">
            {Object.keys(pages).map(key => (
              <button
                type="button"
                className={classNames(
                  'btn',
                  { 'btn-primary': this.state.selectedPage === key }
                )}
                key={key}
                onClick={() => this.onButtonSelect(key)}
              >
                {key}
              </button>
            ))}
          </div>
          <hr />
        </div>
        <ExamplePage>
          {pages[this.state.selectedPage]}
        </ExamplePage>
      </div>
    );
  }
}

export default Stage;
