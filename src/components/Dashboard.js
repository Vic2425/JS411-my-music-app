import { React, useState } from "react";
import "../App.css";
import {
  Box,
  Slider,
  Stack,
  Typography,
  Switch
} from "@mui/material";
import { Card, CardContent, CardActionArea, CardActions } from "@mui/material";

export default function Dashboard() {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const volumeChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography varian="h1" sx={{ mt: 2, ml: 3, fontSize: '24px'}}>Welcome user!</Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 5 }}
      >
        <Card sx={{ maxWidth: 300, minWidth: 200, height: 300 }}>
          
            <CardContent sx={{ m: 2 }}>
              <Typography gutterBottom variant="h6" component="div">
                Online Mode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
          <CardActions sx={{ ml: 1, mt: 5 }}>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, minWidth: 200, height: 300 }}>
            <CardContent sx={{ m: 2 }}>
              <Typography gutterBottom variant="h6" component="div">
                Master Volumn
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Overries all other sound settings in this application
              </Typography>
            </CardContent>
          <CardActions sx={{ width: 250, ml: 2, mt: 6 }}>
            <Slider
              aria-label="Volume"
              defaultValue={20}
              onChange={volumeChange}
              step={10}
              marks
              min={0}
              max={100}
            />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, minWidth: 200, height: 300 }}>
            <CardContent sx={{ m: 2 }}>
              <Typography gutterBottom variant="h6" component="div">
                Online Mode
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Is this application connected to the internet?
              </Typography>
            </CardContent>
          <CardActions sx={{ ml: 2, mt: 5 }}>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
}
