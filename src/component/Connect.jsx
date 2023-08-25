import React from "react";
import { Button } from "react-bootstrap";

function Connect() {
  return (
    <Button
      variant="primary"
      style={{
        height: 52,
        width: 156,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: 20,
        marginTop: 28,
        backgroundImage: "linear-gradient(to right, #7C0F35, #581266)",
        border: "none",
        color: "white",
        fontSize: 20,
        fontWeight: 600
      }}
    >
      Connect
    </Button>
  );
}

export default Connect;
