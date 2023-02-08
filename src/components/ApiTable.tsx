import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Container, Typography } from "@mui/material";

interface Data {
  userId: number;
  id: number;
  title: String;
  body: String;
}

const columns: GridColDef[] = [
  {
    field: "userId",
    headerName: "USERID",
    width: 90,
  },
  {
    field: "id",
    headerName: "ID",
    width: 50,
  },
  {
    field: "title",
    headerName: "TITLE",
    width: 500,
  },
  {
    field: "body",
    headerName: "BODY",
    width: 500,
  },
];

const ApiTable: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <Container>
      <Typography
        sx={{ color: "white", textAlign: "center", p: 8 }}
        variant="h3"
      >
        Api fetched and shown in MUI data-Grid
        <br />
        <Typography sx={{ color: "secondary.main" }}>
          jsonplaceholder/posts api used
        </Typography>
      </Typography>

      <Box
        sx={{
          height: 650,
          bgcolor: "secondary.dark",
          borderRadius: "5px",
          color: "primary.main",
        }}
      >
        <DataGrid
          //data => api data in row
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          sx={{ color: "black", fontWeight: "1000" }}
        />
      </Box>
    </Container>
  );
};

export default ApiTable;
