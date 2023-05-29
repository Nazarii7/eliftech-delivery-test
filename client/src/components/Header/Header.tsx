import { StyleHeader, Link } from "./Header.styled";

const Header = () => {
  return (
    <StyleHeader>
      <nav>
        <Link to="/">Shop</Link>

        <Link to="/cart">Shoping Cart</Link>
      </nav>
    </StyleHeader>
  );
};

export default Header;
