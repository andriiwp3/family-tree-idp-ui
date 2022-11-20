import { IFamily } from "../types";

export interface FamilyTreeState {
    families: IFamily[]
    loading: boolean;
    error: string | null;
}

export enum FamilyTreeActionTypes {
  FETCH_FAMILIES_REQUEST = "FETCH_FAMILIES_REQUEST",
  FETCH_FAMILIES_SUCCESS = "FETCH_FAMILIES_SUCCESS",
  FETCH_FAMILIES_FAILED = "FETCH_FAMILIES_FAILED",
}

export interface IFetchFamiliesRequestAction {
  readonly type: FamilyTreeActionTypes.FETCH_FAMILIES_REQUEST;
}

export interface IFetchFamiliesSuccessAction {
  readonly type: FamilyTreeActionTypes.FETCH_FAMILIES_SUCCESS;
  readonly payload: IFamily[]
}

export interface IFetchFamiliesFailedAction {
  readonly type: FamilyTreeActionTypes.FETCH_FAMILIES_FAILED;
  readonly payload: string
}

export type FamilyTreeAction = IFetchFamiliesRequestAction | IFetchFamiliesSuccessAction | IFetchFamiliesFailedAction;