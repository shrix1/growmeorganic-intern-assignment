import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

interface InputProps {
  name: String;
  phone: String;
  email: String;
}

const UserDetails: React.FC = () => {
  const [input, setInput] = useState<InputProps>({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    location.href = "/apipage";
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data") || "{}");
    setInput({
      ...input,
      ...savedData,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(input));
  }, [input]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          flexDirection: "column",
          height: "48vh",
          mt: "20vh",
          width: "350px",
          borderRadius: "5px",
          p: 4,
          bgcolor: "white",
          color: "primary.main",
          fontWeight: "900",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "900" }}
        >
          GrowMeOrganic <br />
          <Typography> Please fill the below details</Typography>
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={input.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="PhoneNo"
          variant="outlined"
          type="number"
          name="phone"
          value={input.phone}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="email"
          variant="outlined"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          required
        />

        {
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={
              input.name === "" || input.phone === "" || input.email === ""
            }
            title="Fill the above detail to navigate to next page"
            sx={{
              bgcolor: "secondary.main",
              fontWeight: "900",
              fontSize: "18px",
            }}
          >
            Submit
          </Button>
        }
      </Container>
    </>
  );
};

export default UserDetails;
