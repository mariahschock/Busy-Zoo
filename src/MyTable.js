import React from 'react';
import MaterialTable from 'material-table';
import { customers } from './data';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns = {
          [
            { title: 'ID', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' },
            { title: 'IP', field: 'ip_address' }
          ]
        }
        data={customers}
        title="Customer Info"
        options={{
          headerStyle: {
            background: 'rosybrown',
            border: 'solid 2px black'

          },
          rowStyle: {
            background: 'mistyrose',
          }
        }}
      />
    </div>
  );
}
