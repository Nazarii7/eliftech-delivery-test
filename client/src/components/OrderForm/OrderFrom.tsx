import { Input, Label, Button, Error } from "./OrderForm.styled";
import { useEffect } from "react";
import useInput from "../../hooks/useInput";

const OrderForm = () => {
  const name = useInput("", {
    isEmpty: true,
    minLength: 3,
  });
  const email = useInput("", {
    isEmpty: true,
    minLength: 3,
    reGex: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      text: `Це повинен бути електроний адрес`,
    },
  });
  const phone = useInput("", {
    isEmpty: true,
    minLength: 8,
    reGex: {
      value: /^\+\d{12}$/,
      text: `номер в форматі +380 (067) 467 52 28`,
    },
  });
  const address = useInput("", {
    isEmpty: true,
    minLength: 5,
  });

  useEffect(() => {
    const formData = {
      name: name.value || "",
      email: email.value || "",
      phone: phone.value || "",
      address: address.value || "",
    };
    //    const isValid = !email.isValid || !phone.isValid || !address.isValid;
    //    dispatch(setFormData({ formData, isValid }));
  }, [name, email, phone, address]);

  return (
    <form>
      <Label htmlFor="name">
        Name: {name.error && name.isDirty && <Error> {name.error} </Error>}
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        value={name.value}
        onChange={(e) => name.onChange(e)}
        onBlur={() => name.onBlur()}
        required
      />
      <Label htmlFor="email">
        Email: {email.error && email.isDirty && <Error> {email.error} </Error>}
      </Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={() => email.onBlur()}
        required
      />
      <Label htmlFor="phone">
        Phone: {phone.error && phone.isDirty && <Error> {phone.error}</Error>}
      </Label>
      <Input
        type="tel"
        id="phene"
        name="phone"
        value={phone.value}
        onChange={(e) => phone.onChange(e)}
        onBlur={() => phone.onBlur()}
        required
      />
      <Label htmlFor="address">
        Address:
        {address.error && address.isDirty && <Error> {address.error} </Error>}
      </Label>
      <Input
        type="text"
        id="address"
        name="address"
        value={address.value}
        onChange={(e) => address.onChange(e)}
        onBlur={() => address.onBlur()}
        required
      />
      <Button type="submit">Submit order</Button>
    </form>
  );
};

export default OrderForm;
