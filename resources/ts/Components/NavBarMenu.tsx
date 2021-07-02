import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeRounded"
import HelpIcon from "@material-ui/icons/Help"
import { Link as RouterLink } from "react-router-dom";

interface props {
    isOpen: boolean;
    toggleDrawerHandler: () => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const NavBarMenu = (props: props) => {
    return(
        <div>
            <React.Fragment>
                <Drawer open={props.isOpen} onClose={props.toggleDrawerHandler()}>
                    <div
                        role="presentation"
                        onClick={props.toggleDrawerHandler()}
                        onKeyDown={props.toggleDrawerHandler()}
                    >
                        <List>
                            <ListItem button component={RouterLink} to="/">
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button component={RouterLink} to="/about">
                                <ListItemIcon><HelpIcon /></ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default NavBarMenu;
