import { FamilyTreeState, FamilyTreeActionTypes, FamilyTreeAction } from './types';

const initialState: FamilyTreeState = {
    families: [],
    loading: false,
    error: null
}

export default function familyTreeReducer(state = initialState, action: FamilyTreeAction): FamilyTreeState {
    switch (action.type) {
        case FamilyTreeActionTypes.FETCH_FAMILIES_REQUEST:
            return { ...state, loading: true }

        case FamilyTreeActionTypes.FETCH_FAMILIES_SUCCESS:
            return { ...state, families: action.payload, loading: false, error: null }

        case FamilyTreeActionTypes.FETCH_FAMILIES_FAILED:
            return { ...state, loading: false, error: action.payload }

        default: 
            return state
    }
}