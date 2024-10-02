import useStore from "./store";
import { setCurrentComponent, setFeedbackType } from "@/store";

export interface Navigation {
  next(): void;
  back(): void;
}

export default function useNavigation(): Navigation {
  const store = useStore();

  function next(): void {
    if (store.currentComponent === "SelectFeedbackType") {
      setCurrentComponent("WriteFeedback");
    }
  }

  function back(): void {
    if (store.currentComponent === "WriteFeedback") {
      setCurrentComponent("SelectFeedbackType");
      setFeedbackType("");
    }
  }

  return {
    next,
    back,
  };
}
