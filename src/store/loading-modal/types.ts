
import { ActionI } from "../types";

export type LoadingModalType = "CHECK_LOADING" | "START_CALL" | "END_CALL";

export interface modalPayload {
    displayModal?: boolean;
    counter?: number;
}

export type ActionLoadingModal = ActionI<LoadingModalType, modalPayload>;