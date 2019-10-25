import React from 'react';

import BasicRecord from './BasicRecord'

class ExampleComponent extends React.Component {
    state = {
      basicRecord: null
    };

    componentDidMount() {
      this.retrieveBasicRecord();
    }

    async retrieveBasicRecord() {
      const response = await fetch('/api/basic_record');
      const data = await response.json();
      this.setState({
        basicRecord: data
      })
    }

    render() {
      const { basicRecord } = this.state;

      return (
        <div className="basicRecord">
          <h2>Example Component</h2>
          {basicRecord &&
            <BasicRecord data={basicRecord} />
          }
        </div>
      );
    }
}

export default ExampleComponent;
