import SelectFeedbackType from "@/components/Wizard/SelectFeedbackType.vue";
import useStore from "./store";
import { setCurrentComponent, setFeedbackType } from "@/store";
import WriteFeedback from "@/components/Wizard/WriteFeedback.vue";
import Error from "@/components/Wizard/Error.vue";
import Success from "@/components/Wizard/Success.vue";

export interface Navigation {
  next(): void;
  back(): void;
  setErrorState(): void;
  setSuccessState(): void;
}

export default function useNavigation(): Navigation {
  const store = useStore();

  function setErrorState(): void {
    setCurrentComponent(Error);
  }

  function setSuccessState(): void {
    setCurrentComponent(Success);
  }

  function next(): void {
    if ((store.currentComponent as any).__name === "SelectFeedbackType") {
      setCurrentComponent(WriteFeedback);
      console.log((store.currentComponent as any).__name);
    }
  }

  function back(): void {
    setCurrentComponent(SelectFeedbackType);
    setFeedbackType("");
    if ((store.currentComponent as any).__name === "WriteFeedback") {
      setCurrentComponent(SelectFeedbackType);
      setFeedbackType("");
    }
  }

  return {
    next,
    back,
    setErrorState,
    setSuccessState
  };
}
