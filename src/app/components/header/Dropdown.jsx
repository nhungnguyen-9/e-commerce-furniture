import * as React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Dropdown = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{padding: 0}}>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={props.primaryHeader} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.items &&
            props.items.map((item, itemIndex) => (
              <ListItemButton key={itemIndex} sx={{pl: 4}}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </List>
  );
};

export default Dropdown;
