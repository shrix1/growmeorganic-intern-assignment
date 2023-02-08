import { Typography, Button, Container, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <Container
      sx={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        width: "700px",
        height: "400px",
        gap: "70px",
        mt: "30vh",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        The page you looking for is not found
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-Between",
          alignContent: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "secondary.main", p: 2, fontSize: "20px" }}
          >
            Go to Home page
          </Button>
        </Link>

        <Link to="/apipage" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "secondary.main", p: 2, fontSize: "20px" }}
          >
            Api page
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default PageNotFound;
