import React, { useState } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import relationshipArray from "./relationships.d";
import occassionArray from "./occassion.d";
import durationArray from "./duration.d";
import toneArray from "./tone.d";
import expressionArray from "./expression.d";
import { Button } from "@material-ui/core";
import axios from "axios";
function callApi(IPrompt, setState) {
  axios
    .post(`http://localhost:5000/api/gpt3/getGreetings`, IPrompt)
    .then(({ data }) => {
      console.log(data);
      setState({
        m1: data.messages[0].text,
        m2: data.messages[1].text,
        m3: data.messages[2].text,
        gifs: data.gifs,
      });
    });
}
function Inputs({ state, setState }) {
  const [senderName, setSenderName] = useState("");
  const [receipient, setReceipient] = useState("");
  const [interest1, setInterest1] = useState("");
  const [interest2, setInterest2] = useState("");
  const [interest3, setInterest3] = useState("");
  const [relationship, setRelationship] = useState("Father");
  const [occassion, setOccassion] = useState("Birthday");
  const [duration, setDuration] = useState("months");
  const [tone, setTone] = useState("polite");
  const [type, setType] = useState("I am so proud");
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col h-screen justify-start bg-gray-300 items-start rounded-md shadow-lg space-y-2 p-4">
      <TextField
        variant="outlined"
        value={senderName}
        onChange={(event) => setSenderName(event.target.value)}
        label="senderName"
      />
      <TextField
        variant="outlined"
        value={receipient}
        onChange={(event) => setReceipient(event.target.value)}
        label="receipient"
      />
      <TextField
        id="select"
        label="Relationship"
        value={relationship}
        select
        variant="outlined"
        onChange={(event) => setRelationship(event.target.value)}
      >
        {relationshipArray.map((r) => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </TextField>
      <TextField
        id="select"
        label="Occassion"
        value={occassion}
        select
        variant="outlined"
        onChange={(event) => setOccassion(event.target.value)}
      >
        {occassionArray.map((r) => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </TextField>
      <TextField
        id="select"
        label="Occassion"
        value={duration}
        select
        variant="outlined"
        onChange={(event) => setDuration(event.target.value)}
      >
        {durationArray.map((r) => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </TextField>
      <TextField
        id="select"
        label="Tone"
        value={tone}
        select
        variant="outlined"
        onChange={(event) => setTone(event.target.value)}
      >
        {toneArray.map((r) => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </TextField>
      <div className="flex flex-row space-x-3">
        <TextField
          id="select"
          label="Expression"
          value={type}
          select
          variant="outlined"
          onChange={(event) => setType(event.target.value)}
        >
          {expressionArray.map((r) => (
            <MenuItem value={r}>{r}</MenuItem>
          ))}
        </TextField>
        <TextField
          variant="outlined"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          label="Expression value"
        />
      </div>
      <div className="flex flex-row space-x-3">
        <TextField
          variant="outlined"
          value={interest1}
          onChange={(event) => setInterest1(event.target.value)}
          label="interest1"
        />
        <TextField
          variant="outlined"
          value={interest2}
          onChange={(event) => setInterest2(event.target.value)}
          label="interest2"
        />
        <TextField
          variant="outlined"
          value={interest3}
          onChange={(event) => setInterest3(event.target.value)}
          label="interest3"
        />
      </div>
      <Button
        color="primary"
        variant="outlined"
        onClick={() =>
          callApi(
            {
              tone: `${tone}`,
              occassion: `${occassion}`,
              receipient: `${receipient}`,
              age: `21st`,
              interests: [`${interest1}`, `${interest2}`, `${interest3}`],
              relationship: `${relationship}`,
              expression: `${type} ${value}`,
              senderName: `${senderName}`,
              date: `22`,
              duration: `${duration}`,
            },
            setState
          )
        }
      >
        Do stuff
      </Button>
    </div>
  );
}

export default Inputs;
