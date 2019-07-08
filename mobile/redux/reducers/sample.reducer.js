const initialState = {
  sample: 'this is an example'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SAMPLE':
      return { ...state, ...payload };
    default:
      return state;
  }
  // return state;
};

// export default (initialState) => {
//   return initialState;
// };
