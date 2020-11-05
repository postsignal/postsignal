import React from "react";
import ReleaseCard from "./ReleaseCard";
import { Grid, Typography, withStyles, Button } from "@material-ui/core";

const styles = (theme) => ({
  releasesHeader: {
    // padding: 5,
  },
});

class Body extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={5} justify="center">
          <Grid item key="releasesHeader" xs={12} sm={12} md={12}>
            <Button variant="outlined" style={{ width: "100%" }}>
              <Typography variant="h5" className={classes.releasesHeader}>
                релизы
              </Typography>
            </Button>
          </Grid>
          {releasesCollection.map((release) => (
            <Grid item key={release.title} xs={12} sm={6} md={3}>
              <ReleaseCard
                id={release.id}
                title={release.title}
                img={release.img}
                description={release.description}
              />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export const releasesCollection = [
  {
    id: "imago",
    title: "Имаго",
    img: "Имаго.jpg",
    description: "TBD",
  },
  {
    id: "craters",
    title: "Кратеры",
    img: "Кратеры.jpg",
    description: "TBD",
  },
  { id: "nbs", title: "Н.Б.С.", img: "НБС.jpg", description: "TBD" },
  { id: "signal", title: "Сигнал", img: "Сигнал.jpg", description: "TBD" },
];

export default withStyles(styles)(Body);
