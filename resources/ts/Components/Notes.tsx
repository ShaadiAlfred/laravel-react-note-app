import React from "react";
import axios from "axios";

async function bla() {
    axios.get("/api/notes").then(res => console.log(res.data));
}

const Notes = () => {
    bla();
    return (
      <h1>Notes</h1>
    );
}

export default Notes;
