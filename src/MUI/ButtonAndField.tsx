import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

export const ButtonAndField = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("");

  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&:hover": { backgroundColor: "lightBlue" },
          },
        },
      },
    },
  });

  const theme2 = createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "green",
            },
          },
        },
      },
    },
  });

  const theme3 = createTheme({
    components: {
      MuiRadio: {
        styleOverrides: {
          root: {
            "& .MuiSvgIcon-root": {
              fontSize: "45px",
            },
          },
        },
      },
    },
  });
  return (
    <div>
      <Typography component="h2" variant="h2">
        {displayText}
      </Typography>
      <TextField
        sx={{ backgroundColor: "lightBlue" }}
        label="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button variant="contained" onClick={() => setDisplayText(inputValue)}>
        Show
      </Button>

      <FormGroup>
        <ThemeProvider theme={theme2}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="daniel"
          />
          <FormControlLabel control={<Checkbox />} label="ari" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </ThemeProvider>
      </FormGroup>

      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <ThemeProvider theme={theme3}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </ThemeProvider>
      </RadioGroup>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <ThemeProvider theme={theme}>
          <Select
            sx={{ backgroundColor: "lightBlue" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </ThemeProvider>
      </FormControl>
    </div>
  );
};

export default ButtonAndField;
