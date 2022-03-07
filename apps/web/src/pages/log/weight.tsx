import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const AContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  min-height: 100vh;
`;

const WeightLog = () => {
  const rows = [
    {
      date: new Date().toISOString(),
      id: 123512,
      weight: 200.8,
    },
    {
      date: new Date(new Date().getDate() + 1).toISOString(),
      id: 43124,
      weight: 205.8,
    },
  ];
  const columns = [
    {
      field: 'date',
      flex: 1,
      headerName: 'Date',
    },
    {
      field: 'weight',
      flex: 1,
      headerName: 'Weight',
    },
  ];

  return (
    <AContainer>
      <Typography variant='h1'>{'Weight Log'}</Typography>
      <DataGrid
        autoHeight
        columns={columns}
        pageSize={100}
        rows={rows}
        rowsPerPageOptions={[100]}
      />
    </AContainer>
  );
};

export default WeightLog;
