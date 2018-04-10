
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

console.log('hey there!!');

function onChange(date, dateString) {
  console.log(date, dateString);
}
const App = () => {
  return (
    <div>
     <DatePicker onChange={onChange} />
      Simple Sails-React stater
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
