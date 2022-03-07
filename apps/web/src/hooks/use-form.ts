import * as React from 'react';

import { selectFormState } from '../selectors/form-selectors';

const useForm = (config) => {
  const initialState = selectFormState(config);
  const [state, setState] = React.useState(initialState);

  const setInput = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  return {
    input: state,
    setInput,
  };
};

export default useForm;
