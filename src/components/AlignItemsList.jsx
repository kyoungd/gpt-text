import React, { memo } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepOrange, deepPurple } from "@mui/material/colors";

function AlignItemsList({messages}) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {messages && messages.length > 0 && messages.map((line, index) => (
        <>
        <ListItem key={index} alignItems="flex-start">
          <ListItemAvatar>
            {line.name === "AI" && (
              <Avatar sx={{ bgcolor: deepOrange[500] }}>{line.name}</Avatar>
            )}
            {line.name === "Me" && (
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{line.name}</Avatar>
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
                  {line.name} <br />
                </Typography>
                {line.text}
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

export default memo(AlignItemsList);
