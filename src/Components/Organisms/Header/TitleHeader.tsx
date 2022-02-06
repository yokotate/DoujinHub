import { AppBar } from "@mui/material"
import { TitleText } from "../../Atoms/Text/TitleText";
import Toolbar from '@mui/material/Toolbar';
import { HeaderUserButton, MenuItemProps } from "../../Molecules/Header/HeaderUserButton";

type TitleHeaderProps = {
    HeaderUserMenu:MenuItemProps[];
    HeaderColor:'default'|'inherit'|'primary'|'secondary'|'transparent';
}

export const TitleHeader = (props:TitleHeaderProps) => {
    return (
        <AppBar position="static" color={props.HeaderColor}>
            <Toolbar>
                <TitleText title={"同人HUB"} />
                <HeaderUserButton id={"HeaderUserButtonMenu"} Items={props.HeaderUserMenu} />
            </Toolbar>
        </AppBar>
    )
}

TitleHeader.defaultProps = {
    HeaderColor:'transparent',
}

