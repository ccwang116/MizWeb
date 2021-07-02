import React, { useEffect, useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
function PlusMinusBtn({ prodLabel, price, onChange }) {
  const [value, setValue] = useState(0);
  const handlePlus = (label, e) => {
    setValue(value + 1);
  };
  const handleMinus = (label, e) => {
    setValue(value - 1);
  };
  const handleChangeAmount = (label, e) => {
    console.log(+e);
    setValue(e);
  };
  useEffect(() => {
    onChange(value, prodLabel, price);
  }, [value]);
  return (
    <InputGroup className="mb-3" size="sm" style={{ width: "90px" }}>
      <Button variant="light" size="sm" onClick={() => handleMinus(prodLabel)}>
        <i class="fas fa-minus"></i>
      </Button>
      <FormControl
        type="text"
        value={value}
        className="text-center"
        onChange={(evt) => handleChangeAmount(prodLabel, evt.target.value)}
      />
      <Button variant="light" size="sm" onClick={() => handlePlus(prodLabel)}>
        <i class="fas fa-plus"></i>
      </Button>
    </InputGroup>
  );
}

export default PlusMinusBtn;
