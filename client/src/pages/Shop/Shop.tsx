import MealsList from "../../components/MealsList/MealsList";
import ShopList from "../../components/ShopList/ShopList";
import { Container } from "./Shop.styled";

const Shop = () => {
  return (
    <main>
      <Container>
        <ShopList />
        <MealsList />
      </Container>
    </main>
  );
};

export default Shop;
