import {
  styled,
  alpha,
  Toolbar,
  AppBar,
  InputBase,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [burgerMenu, setBurgerMenu] = useState<null | HTMLElement>(null);
  const [show, setShow] = useState<boolean>(true);
  let oldScroll: number = 0;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setBurgerMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setBurgerMenu(null);
  };

  const controlNavigation = () => {
    if (window.scrollY < 200) {
      setShow(true);
    } else if (window.scrollY >= 200) {
      let newScroll = window.scrollY;
      oldScroll < newScroll ? setShow(false) : setShow(true);
      oldScroll = newScroll <= 0 ? 0 : newScroll;
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavigation);
    return () => {
      window.removeEventListener("scroll", controlNavigation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <>
      <AppBar
        component="nav"
        className={`fixed w-10/12 right-3 lg:right-6 text-white transition-all duration-1000 ease-in-out bg-primary ${
          show ? "opacity-100 top-6" : "opacity-0 -top-6"
        }`}
      >
        <Toolbar className="flex p-0">
          <div className=" w-16 px-1">
            {!burgerMenu ? (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu}
                color="inherit"
                className="w-full"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </IconButton>
            ) : (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleCloseMenu}
                color="inherit"
                className="w-full"
              >
                <FontAwesomeIcon icon={faXmark} />
              </IconButton>
            )}
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
            className={``}
          >
            LOGO
          </Typography>
          <Search className="hidden sm:block">
            <SearchIconWrapper>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="w-16 px-1">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={`w-full`}
            >
              <FontAwesomeIcon icon={faUser} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              disableScrollLock={true}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className="top-12 -left-8"
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar>
        <Menu
          anchorEl={burgerMenu}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          disableScrollLock={true}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(burgerMenu)}
          onClose={handleCloseMenu}
          className={`-top-3 -left-6 sm:-left-20 lg:-left-32 z-10 `}
        >
          <MenuList className="w-60 pt-20">
            <MenuItem onClick={handleCloseMenu}>Title1</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title2</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title3</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title4</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title5</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title6</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title7</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title8</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Title9</MenuItem>
          </MenuList>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navigation;
