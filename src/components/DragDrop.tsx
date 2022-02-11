import { Autocomplete, Button } from "@mui/material";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  // onsubmit: () => void
  onChange: (event: any, value: any) => void;
  name: string;
  id: number;
  label: string;
  year: number;
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const DragDrop = ({ onChange, id, name, label, year }: Props) => {

  const classes = useStyles()

  const inputLabelRef = React.createRef<HTMLLabelElement>()
  const [inputText, setInputText] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(true)



  console.log(inputText)
  return (
    <div>
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          onChange={(e: any) => setInputText(e.target.value)}
          disabled={disabled}
          // className={`${disabled ? classes.root :console.log("bye")}`}
        />

        <Button onClick={()=>setDisabled(!disabled)}>
          {disabled ? <EditIcon /> : <CheckIcon />}
        </Button>
    </div>
  );
};

export default DragDrop;
