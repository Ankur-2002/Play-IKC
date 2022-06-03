import { CATEGORY_SUCCESSFULL } from 'store/actions';

const Initial_state = {
  category: [],
};

const CategoryReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CATEGORY_SUCCESSFULL:
      return {
        category: action.payload,
      };
    default:
      return { category: state.category };
  }
};

export default CategoryReducer;
