import { Button } from "./SubmitButton.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePostOrderMutation } from "../../services/shopApi";
import {
  cleanCart,
  setIsError,
  setIsSuccess,
} from "../../redux/reducers/storeReducers";
import { useAppSelector } from "../../hooks/useDispatch";
import { useDispatch } from "react-redux";

const SubmitButton = () => {
  const { cart } = useAppSelector((state) => state.store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, isValid } = useAppSelector((state) => state.form);
  const [updatePost, result] = usePostOrderMutation({});
  const handleSubmit = () => {
    dispatch(setIsError(null));
    const order = {
      ...formData,
      order: cart,
    };
    updatePost(order);
  };

  useEffect(() => {
    if (result.isError) {
      dispatch(setIsError(result.isError));
    }
    if (result.isSuccess) {
      dispatch(cleanCart());
      dispatch(setIsSuccess(true));
      setTimeout(() => {
        dispatch(setIsSuccess(false));
        navigate("/shops");
      }, 5000);
    }
  }, [result, dispatch, navigate]);
  return (
    <Button disabled={isValid} type="button" onClick={handleSubmit}>
      Submit Order
    </Button>
  );
};

export default SubmitButton;
