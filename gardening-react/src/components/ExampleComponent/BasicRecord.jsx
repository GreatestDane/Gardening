import React from 'react';

class BasicRecord extends React.Component {
    render() {
      const { data } = this.props;

      return (
        <div className={this.props.className || 'basicRecord'}>
          <h3>Basic Record</h3>
          <h4>Title: {data.title}</h4>
          <p>Type: {data.type}</p>
          <p>
            Taco Bell:
            {data.taco_bell.map((item) => {
              return (<span>{item}</span>)
            })}
          </p>
        </div>
      )
    }
}

export default BasicRecord;
