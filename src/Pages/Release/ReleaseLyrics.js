import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  expadButton: {
    margin: "15px 0 0 8px",
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  lyrics: {
    marginLeft: 16,
  },
}));

export default function ReleaseLyrics(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (props.text === undefined) {
    return "";
  }

  return (
    <Box>
      <Button
        className={classes.expadButton}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="lyrics"
        size="large"
        endIcon={
          <ExpandMoreIcon
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          />
        }
      >
        текст
      </Button>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography paragraph className={classes.lyrics}>
          {props.text.split("\n").map((item, id) => {
            return (
              <span key={id}>
                {item} <br />
              </span>
            );
          })}
        </Typography>
      </Collapse>
    </Box>
  );
}
