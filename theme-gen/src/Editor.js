import React, { Component } from 'react';
import Sass from 'sass.js/dist/sass.js';

// import functions from './functions2.scss';
import theme from '@edx/edx-bootstrap/sass/open-edx/_variables.scss';
// import bootstrap from 'bootstrap/scss/bootstrap.scss';

import functions from 'bootstrap/scss/_functions.scss';
import mixins from 'bootstrap/scss/_mixins.scss';
import print from 'bootstrap/scss/_print.scss';
import reboot from 'bootstrap/scss/_reboot.scss';
import type2 from 'bootstrap/scss/_type.scss';
import images from 'bootstrap/scss/_images.scss';
import code from 'bootstrap/scss/_code.scss';
import grid from 'bootstrap/scss/_grid.scss';
import tables from 'bootstrap/scss/_tables.scss';
import forms from 'bootstrap/scss/_forms.scss';
import buttons from 'bootstrap/scss/_buttons.scss';
import transitions from 'bootstrap/scss/_transitions.scss';
import dropdown from 'bootstrap/scss/_dropdown.scss';
import buttonGroup from 'bootstrap/scss/_button-group.scss';
import inputGroup from 'bootstrap/scss/_input-group.scss';
import customForms from 'bootstrap/scss/_custom-forms.scss';
import nav from 'bootstrap/scss/_nav.scss';
import navbar from 'bootstrap/scss/_navbar.scss';
import card from 'bootstrap/scss/_card.scss';
import breadcrumb from 'bootstrap/scss/_breadcrumb.scss';
import pagination from 'bootstrap/scss/_pagination.scss';
import badge from 'bootstrap/scss/_badge.scss';
import jumbotron from 'bootstrap/scss/_jumbotron.scss';
import alert from 'bootstrap/scss/_alert.scss';
import progress from 'bootstrap/scss/_progress.scss';
import media from 'bootstrap/scss/_media.scss';
import listGroup from 'bootstrap/scss/_list-group.scss';
import close from 'bootstrap/scss/_close.scss';
import modal from 'bootstrap/scss/_modal.scss';
import tooltip from 'bootstrap/scss/_tooltip.scss';
import popover from 'bootstrap/scss/_popover.scss';
import carousel from 'bootstrap/scss/_carousel.scss';
// import utilities from 'bootstrap/scss/_utilities.scss';

Sass.setWorkerUrl('/sass.worker.js');
const sass = new Sass();

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: {
        '$theme-color-inverse': '#ff00ff',
        '$white': '#ff00ff',
        '$theme-color-primary': '#ff00ff',
      },
    };
  }

  interpretSass() {
    // read in a sass file
    // const scss = '$someVar: 123px; .some-selector { width: $someVar; }';
    // console.log(theme);
    let lines = theme.split('\n');

    Object.keys(this.state.variables).forEach(variable => {
      for (let i=0; i<lines.length; i++) {
        if (!lines[i].startsWith('//')) {
          const [name, value] = lines[i].split(': ');
          if (name === variable) {
            lines[i] = `${name}: ${this.state.variables[variable]};`
            break;
          }
        }
      }
    });

    const output = lines.join('\n');

    const scss = `
      ${functions}
      ${output}
      ${mixins}
      ${print}
      ${reboot}
      ${type2}
      ${images}
      ${code}
      ${grid}
      ${tables}
      ${forms}
      ${buttons}
      ${transitions}
      ${dropdown}
      ${buttonGroup}
      ${inputGroup}
      ${customForms}
      ${nav}
      ${navbar}
      ${card}
      ${breadcrumb}
      ${pagination}
      ${badge}
      ${jumbotron}
      ${alert}
      ${progress}
      ${media}
      ${listGroup}
      ${close}
      ${modal}
      ${tooltip}
      ${popover}
      ${carousel}
    `;

    // const scss = `
    //   ${functions}
    //   ${output}
    //   ${bootstrap}
    // `;

    console.log(scss);

    // compile
    sass.compile(scss, function(result) {
      console.log(result);
      document.querySelector('style').innerHTML = result.text;
    });
  }

  render() {
    this.interpretSass();
    return (
      <div>
        $theme-color-inverse: #FF00FF;
      </div>
    );
  }
}

export default Editor;
