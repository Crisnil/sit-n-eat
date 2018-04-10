import React from 'react';
import { PieChart, Pie } from 'recharts';


function Dashboard() {

  const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

  const data02 = [{name: 'A1', value: 100},
    {name: 'A2', value: 300},
    {name: 'B1', value: 100},
    {name: 'B2', value: 80},
    {name: 'B3', value: 40},
    {name: 'B4', value: 30},
    {name: 'B5', value: 50},
    {name: 'C1', value: 100},
    {name: 'C2', value: 200},
    {name: 'D1', value: 150},
    {name: 'D2', value: 50}]

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      {/*<PieChart width={730} height={250}>
        <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data02} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
      </PieChart>*/}

    </div>
  );
}

Dashboard.propTypes = {
};

export default Dashboard;
