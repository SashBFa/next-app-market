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
} from "@mui/material";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LateralNavigation from "./LateralNavigation";

const Navigation = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [show, setShow] = useState(true);

  let oldScroll = 0;

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
    <AppBar
      component="nav"
      className={`fixed w-10/12 right-3 lg:right-6 text-white transition-all duration-1000 ease-in-out bg-primary ${
        show ? "opacity-100 top-6" : "opacity-0 -top-6"
      }`}
    >
      <LateralNavigation />
      <Toolbar className="flex justify-between">
        <div className="mr-3 sm:mr-7">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </IconButton>
        </div>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
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
        <div className="sm:ml-7">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
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
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
