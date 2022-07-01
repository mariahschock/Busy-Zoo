import React from 'react';
import MyChart, { SecondChart } from './MyChart';
import MyTable from './MyTable';

export default function Admin() {
  return (
    <div>
      <MyTable />
      <MyChart />
      <SecondChart />
    </div>
  );
}
