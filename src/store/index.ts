import { Component, reactive, readonly } from "vue";
import SelectFeedbackType from "@/components/Wizard/SelectFeedbackType.vue";
import Success from "@/components/Wizard/Success.vue";
import Error from "@/components/Wizard/Error.vue";

export type StoreState = {
  currentComponent: Component;
  message: string;
  feedbackType: string;
  fingerprint: string;
  apiKey: string;
  currentPage: string;
};

const initialState: StoreState = {
//   currentComponent: SelectFeedbackType,
//   currentComponent: Success,
  currentComponent: Error,
  message: "",
  feedbackType: "",
  fingerprint: "",
  apiKey: "",
  currentPage: "",
};

const state = reactive<StoreState>({ ...initialState });

export function setCurrentComponent (component: Component): void {
    state.currentComponent = component;
}

export function setMessage (message: string): void {
    state.message = message;
}

export function setFeedbackType (feedbackType: string): void {
    state.feedbackType = feedbackType;
}

export function setFingerprint (fingerprint: string): void {
    state.fingerprint = fingerprint;
}

export function setApikey (apiKey: string): void {
    state.apiKey = apiKey;
}

export function setCurrentPage (page: string): void {
    state.currentPage = page;
}

export function resetStore (): void {
    setCurrentComponent(initialState.currentComponent);
    setMessage(initialState.message);
    setFeedbackType(initialState.feedbackType);
    setFingerprint(initialState.fingerprint);
    setApikey(initialState.apiKey);
    setCurrentPage(initialState.currentPage);
}

export default readonly(state);
