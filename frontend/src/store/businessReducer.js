export const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS';
export const RECEIVE_SEARCH_RESULTS = 'businesses/RECEIVE_SEARCH_RESULTS'; // New action type

const receiveBusinesses = (businesses) => {
  return {
    type: RECEIVE_BUSINESSES,
    businesses
  };
};

const receiveBusiness = (business) => {
  return {
    type: RECEIVE_BUSINESS,
    business
  };
};

const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};

export const getBusinesses = (store) => {
    if (store.businesses) {
        return Object.values(store.businesses);
    } else  {
       return []
    }
}

export const getBusiness = (businessId) => (store) => {

   
    if (store.businesses) {
        return store.businesses[businessId];
    } else {
        return null;
    }
}

export const fetchBusinesses = () => async (dispatch) => {
    const response = await fetch('/api/businesses');
    const data = await response.json();
    dispatch(receiveBusinesses(data));
}

export const fetchBusiness = (businessId) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${businessId}`);
    const data = await response.json();
    dispatch(receiveBusiness(data));
}

export const searchBusinesses = (searchTerm) => async (dispatch) => {
    try {
      const response = await fetch(`/api/businesses/search?term=${searchTerm}`);
      const data = await response.json();
      dispatch(receiveSearchResults(data));
    } catch (error) {
      console.error('Error searching businesses:', error);
    }
};

const businessReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = { ...state };
  
    switch (action.type) {
      case RECEIVE_BUSINESSES:
        return { ...newState, ...action.businesses };
      case RECEIVE_BUSINESS:
        newState[action.business.id] = action.business;
        return newState;
      case RECEIVE_SEARCH_RESULTS:
        return { ...newState, ...action.results };
      default:
        return state;
    }
  };
  

export default businessReducer;