import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// start styled component

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `2px solid ${theme.palette.background.paper}`,
    right: '-5px',
    top: '0px',
    padding: '0 0px',
  },
}));

const MenuIte = styled(Nav.Link)({
  fontSize: '20px',
    fontWeight: '700',
})

function Navbars() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <MenuIte href="#home">Men's</MenuIte>
            <MenuIte href="#features">Women</MenuIte>
            <MenuIte href="#pricing">Gadgets</MenuIte>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <IconButton aria-label="cart" style={{color: "#ffff"}}>
                <StyledBadge badgeContent={4} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Nav.Link>
            <Nav.Link href="#features">
            <IconButton aria-label="cart" style={{color: "#ffff"}}>
                <StyledBadge badgeContent={4} color="secondary">
                <FavoriteIcon />
                </StyledBadge>
              </IconButton>
              
            </Nav.Link>
            <Nav.Link href="#pricing">
            <IconButton aria-label="cart" style={{color: "#ffff"}}>
                <StyledBadge color="secondary">
                <AccountCircleIcon />
                </StyledBadge>
              </IconButton>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
