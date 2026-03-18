import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled, Typography, useTheme } from '@mui/material';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export const StyledNavLink = styled("a")(( { theme } ) => ({
    textDecoration: "none",
    color: "inherit",
    '&:hover': {
        color: theme.palette.secondary.light
    },
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "end"
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-evenly",
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const theme = useTheme();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    const NavBar = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    }))

    return (
            <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
                <NavBar>
                    <StyledMobileToolbar>
                        <ThemeToggle />
                        <IconButton
                            size="large"
                            aria-label="menu do usuário atual"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => handleSmoothScroll("about")}>
                                <StyledNavLink>Sobre</StyledNavLink>
                            </MenuItem>
                            <MenuItem onClick={() => handleSmoothScroll("skills")}>
                                <StyledNavLink>Habilidades</StyledNavLink>
                            </MenuItem>
                            <MenuItem onClick={() => handleSmoothScroll("projects")}>
                                <StyledNavLink>Projetos</StyledNavLink>
                            </MenuItem>
                        </Menu>
                    </StyledMobileToolbar>
                    <StyledDesktopToolbar variant="regular">
                        <MenuItem>
                            <Typography variant='h6'>

                                {'<Marcus '}
                                <Typography component="span" variant='h6' color="secondary.main">Jr</Typography>
                                {'/>'}
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>Sobre</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Habilidades</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projetos</StyledNavLink>
                        </MenuItem>
                        <MenuItem>
                            <ThemeToggle />
                        </MenuItem>
                    </StyledDesktopToolbar>
                </NavBar>
            </AppBar>
    );
}
