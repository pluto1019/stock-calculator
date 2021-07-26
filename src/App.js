import { Button, TextField } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { useState } from 'react';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            id: props.id,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix='$'
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function App() {
  const [values, setValues] = useState({
    cost: '0',
    quantity: '0',
    amount: '0',
    addCost: '0',
    addQuantity: '0',
    addAmount: '0',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className='App'>
      <div className=''>
        <h2>투자 현황</h2>
        <TextField
          label='최종평단'
          value={values.cost}
          id='cost'
          InputProps={{
            inputComponent: NumberFormatCustom,
            readOnly: true,
          }}
        />
        <TextField
          label='최종수량'
          value={values.quantity}
          id='quantity'
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label='최종금액'
          value={values.amount}
          id='amount'
          InputProps={{
            inputComponent: NumberFormatCustom,
            readOnly: true,
          }}
        />
      </div>
      <div className=''>
        <h2>추매</h2>

        <TextField
          label='평단'
          value={values.addCost}
          onChange={handleChange}
          id='addCost'
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
        <TextField
          label='수량'
          value={values.addQuantity}
          onChange={handleChange}
          id='addQuantity'
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
        <TextField
          label='금액'
          value={values.addAmount}
          onChange={handleChange}
          id='addAmount'
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
      </div>
    </div>
  );
}

export default App;
