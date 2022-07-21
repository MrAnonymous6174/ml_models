import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./KnowledgeBase.css";

export const KnowledgeBase = () => {
  return (
    <div className="u-flex">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <div className="knowledge-base-cover u-my-12 u-br-12 ">
            <div className="u-fs-24 u-fw-600" style={{ color: "#7367f0" }}>
              Dedicated Source Used on Website
            </div>
            <p className="u-opacity-0-5 u-my-4 u-fs-14">
              <span>Popular searches: </span>
              <span className="u-fw-600">
                Sales automation, Email marketing
              </span>
            </p>
            <div className="u-flex-just-center u-mt-20">
              <Box
                sx={{
                  width: 576,
                  maxWidth: "100%",
                  background: "rgb(255, 255, 255)",
                  borderRadius: "6px",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Ask a question"
                  id="fullWidth"
                  size="small"
                  variant="outlined"
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    startAdornment: <SearchOutlinedIcon className="u-mr-12" />,
                  }}
                />
              </Box>
            </div>
          </div>
        </Grid>
        {["one", "two", "three", "four", "five", "six"].map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image="https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/demo-1/assets/images/illustration/sales.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
