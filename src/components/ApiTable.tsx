import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Container, Typography } from "@mui/material";
import { height } from "@mui/system";

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
    valueGetter: (params) => params.row.id * 2, //interview change
  },
  {
    field: "title",
    headerName: "TITLE",
    width: 500,
  },
  {
    field: "body",
    headerName: "BODY",
    width: 900,
  },
];

const ApiTable: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  const apiCall = async () => {
    //async interview change
    const fetching = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataFromApi = await fetching.json();
    setData(dataFromApi);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <Container
        sx={{
          display: "flex ",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography>Api Fetch here</Typography>
        <Box
          sx={{
            height: 650,
            bgcolor: "white",
            borderRadius: "5px",
            color: "primary.main",
            width: 1500,
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
    </>
  );
};

export default ApiTable;
