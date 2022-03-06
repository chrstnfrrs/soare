const selectDefault = (type) => {
  const map = {
    string: '',
    email: '',
    password: '',
  };

  return map[type] || '';
};

const selectFormState = (config): any => {
  const formState = Object.values(config).reduce((acc, item: any) => {
    acc[item.name] = selectDefault(item.type);
    return acc;
  }, {});

  return formState;
};

export { selectFormState };
