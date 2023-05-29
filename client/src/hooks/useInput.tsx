import { useState } from "react";
import useValidation from "./useValidatin";
import { ValidationType } from "../shared/type/type";

const useInput = (
  initialValue: string | undefined,
  validations: ValidationType
) => {
  const [value, setValue] = useState<string | undefined>(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>();
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
export default useInput;
