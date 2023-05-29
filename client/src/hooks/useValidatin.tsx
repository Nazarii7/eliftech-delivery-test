import { useState, useEffect } from "react";
import { ValidationType } from "../shared/type/type";

const useValidation = (
  value: string | undefined,
  validations: ValidationType
) => {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(true);
    setError("");
    const validationKeys = Object.keys(validations);
    validationKeys.forEach((key) => {
      switch (key) {
        case "reGex":
          if (value && validations[key]) {
            const isValidValue = validations[key]?.value?.test(value);
            if (!isValidValue) {
              setError(validations[key]?.text || "");
              setIsValid(false);
            }
          }
          break;
        case "minLength":
          if (value && value.length < validations[key]) {
            setIsValid(false);
            setError(`повинно бути більше ${validations[key]}`);
          }
          break;
        case "isEmpty":
          if (!value) {
            setIsValid(false);
            setError(`Не повинно бути пустим`);
          }
          break;
        default:
          break;
      }
    });
  }, [value, validations]);

  return {
    isValid,
    error,
  };
};
export default useValidation;
