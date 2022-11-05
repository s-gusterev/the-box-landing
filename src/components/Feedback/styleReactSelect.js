const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#2947a9' : 'white',
    color: state.isFocused ? 'white' : '#2947a9',
    padding: 10,
  }),
  control: (base, state) => ({
    ...base,
    border: state.isFocused ? '1px solid black' : '1px solid #e0e3eb',
    backgroundColor: state.isSelected ? '#2947a9' : 'white',
    width: '100%',
    height: 43,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: '21px',
    color: '#a3aac2',
    outline: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? '1px solid #2947a9' : '1px solid #e0e3eb',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#a3aac2',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),

  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    padding: 0,
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: 0,
    border: '1px solid #e0e3eb',
  }),
  menuList: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    boxSizing: 'border-box',
  }),

  valueContainer: (provided) => ({
    ...provided,
    paddingLeft: 6
  })
};

export { customStyles }