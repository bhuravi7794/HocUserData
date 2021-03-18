export default function(state = null, action) {
    switch (action.type) {

        case 'UPDATE_EDIT':
          return action.payload;
        
        case 'UPDATE_PRODUCT':
          return null;

        default: {
          return state;
        }

    };
};