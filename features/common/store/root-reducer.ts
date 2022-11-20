import { combineReducers } from 'redux';
import { familyTreeReducer } from '../../family-tree';

export const rootReducer = combineReducers({
    familyTree: familyTreeReducer
})
