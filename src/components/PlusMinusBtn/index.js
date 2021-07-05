import React, { useEffect, useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
function PlusMinusBtn({ data, onChange }) {
  const [value, setValue] = useState(0);
  const handlePlus = (label, e) => {
    setValue(value + 1);
  };
  const handleMinus = (label, e) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handleChangeAmount = (label, e) => {
    setValue(e);
  };
  useEffect(() => {
    onChange(value, data);
  }, [value]);
  return (
    <InputGroup className="mb-3" size="lg" style={{ width: "180px" }}>
      <Button variant="light" size="lg" onClick={() => handleMinus(data.label)}>
        <i class="fas fa-minus"></i>
      </Button>
      <FormControl
        type="text"
        value={value}
        className="text-center"
        onChange={(evt) => handleChangeAmount(data.label, evt.target.value)}
      />
      <Button variant="light" size="lg" onClick={() => handlePlus(data.label)}>
        <i class="fas fa-plus"></i>
      </Button>
    </InputGroup>
  );
}

export default PlusMinusBtn;
