export const RECEIEVE_BUSINESS = 'businesses/RECEIVE_BUSINESS';
export const RECEIEVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES';

const receiveBusiness = (business) => {
    return {
        type: RECEIEVE_BUSINESS,
        business
    }
}

const receiveBusinesses = (businesses) => {
    return {
        type: RECEIEVE_BUSINESSES,
        businesses
    }
}

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
    console.log(data);
    dispatch(receiveBusinesses(data));
}

export const fetchBusiness = (businessId) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${businessId}`);
    const data = await response.json();
    console.log(data);
    dispatch(receiveBusiness(data));
}

const businessReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIEVE_BUSINESS:
            return { ...state, [action.business.id]: action.business };
        case RECEIEVE_BUSINESSES:
            return { ...state, ...action.businesses };
        default:
            return state;
    }
}

export default businessReducer;