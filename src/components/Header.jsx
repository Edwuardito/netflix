import { AppBar, Toolbar } from '@mui/material'
import logo from "../images/Logo-Netflix.png"

const Header = () => {

    return (
        <AppBar>
            <Toolbar>
                <img src={logo} alt="logo" className=''/>
            </Toolbar>
        </AppBar>
    )
}
  
export default Header