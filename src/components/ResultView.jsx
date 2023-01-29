import React, { memo } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepOrange, deepPurple } from "@mui/material/colors";

function getQuestion(str) {
    try {
        let regex = /"q"\s*:\s*"([^"]*)"/;
        let match = str.match(regex);
        let question = match[1];
        return question;    
    }
    catch (e) {
        return str;
    }
}

function ResultView({messages}) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {messages && messages.length > 0 && messages.filter(item => item.is_field).map((line, index) => (
        <>
        <ListItem key={index} alignItems="flex-start">
          <ListItemAvatar>
            {line.is_answered && (
              <Avatar sx={{ bgcolor: deepOrange[500] }}>T</Avatar>
            )}
            {!line.is_answered && (
              <Avatar sx={{ bgcolor: deepPurple[500] }}>F</Avatar>
            )}
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {getQuestion(line.q)} <br />
                </Typography>
                {line.a} - {line.score}
              </React.Fragment>
            }
            />
          </ListItem>
        <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}

export default memo(ResultView);
