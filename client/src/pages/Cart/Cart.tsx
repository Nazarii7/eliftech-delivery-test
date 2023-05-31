import CartList from "../../components/CartList/CartList";
import OrderForm from "../../components/OrderForm/OrderFrom";
import {
  Container,
  ContainerItemFirst,
  ContainerItemSecond,
  Message,
  PageLayout,
  Text,
} from "./Cart.styled";

const Cart = () => {
  return (
    <main>
      <PageLayout>
        <Container>
          <ContainerItemFirst>
            <OrderForm />
          </ContainerItemFirst>
          <ContainerItemSecond>
            <Message>
              You order has been submitted successfully. We will call you within
              15 minutes. Thank you for choosing us and have a nice day!
            </Message>
            <CartList />
          </ContainerItemSecond>
        </Container>
        <Text>Total: __ UAH</Text>
      </PageLayout>
    </main>
  );
};

export default Cart;
