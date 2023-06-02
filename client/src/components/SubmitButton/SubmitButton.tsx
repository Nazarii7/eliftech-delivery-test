import { useCallback } from "react";
import { useAppDispatch } from "../../hooks/useDispatch";
import { Button } from "./SubmitButton.styled";

const SubmitButton = () => {
  const dispatch = useAppDispatch();

  return <Button type="button">Submit Order</Button>;
};

export default SubmitButton;
