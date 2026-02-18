import React from "react";
import { Typography, Container } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" mt={4}>
        Server Details Dashboard
      </Typography>
      {/* Server details table will go here */}
    </Container>
  );
};

export default Dashboard;
