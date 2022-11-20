import { IFamily } from '../types';
import { FamilyTreeActionTypes, IFetchFamiliesRequestAction, IFetchFamiliesSuccessAction, IFetchFamiliesFailedAction } from './types';

export const requestFamiliesAction = (): IFetchFamiliesRequestAction => ({
    type: FamilyTreeActionTypes.FETCH_FAMILIES_REQUEST,
});

export const requestFamiliesSuccessAction = (families: IFamily[]): IFetchFamiliesSuccessAction => ({
    type: FamilyTreeActionTypes.FETCH_FAMILIES_SUCCESS,
    payload: families,
});

export const requestFamiliesFailAction = (error: string): IFetchFamiliesFailedAction => ({
    type: FamilyTreeActionTypes.FETCH_FAMILIES_FAILED,
    payload: error,
});
