import React, { useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface inputProps {
  name: String;
  phone: String;
  email: String;
}

const UserDetails: React.FC = () => {
  const [input, setInput] = useState<inputProps>({
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    //route to second page
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
          marginTop: "20vh",
          width: "350px",
          borderRadius: "10px",
          p: 2,
          bgcolor: "white",
          color: "black",
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
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
          >
            Submit
          </Button>
        }
      </Container>
    </>
  );
};

export default UserDetails;
