const initialState = {
  isPerson: true,
  isContact: false,
  isFamily: false,
  isLocation: false,
  isPhone: false,
  isPassword: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "isPhone":
      return {
        isPhone: true
      };
      break;
    case "isPerson":
      return {
        isPerson: true
      };
      break;
    case "isContact":
      return {
        isContact: true
      };
      break;
    case "isFamily":
      return {
        isFamily: true
      };
      break;

    case "isPassword":
      return {
        isPassword: true
      };
      break;
    case "isLocation":
      return {
        isLocation: true
      };
      break;
  }
  return state;
};

export default reducer;
