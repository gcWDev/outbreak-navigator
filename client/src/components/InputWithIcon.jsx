import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

export default function InputWithIcon(props) {
  const { text, icon, label } = props;

  return (
    <FormControl variant="standard">
      <TextField id={label} label={text} variant="outlined" />
    </FormControl>
  );
}
