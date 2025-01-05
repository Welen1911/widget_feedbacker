import { setApikey, setCurrentPage, setFingerprint } from "@/store";

interface IframeControl {
  updateCoreValuesOnStore(): void;
  notifyOpen(): void;
  notifyClose(): void;
}

export default function useIframeControl(): IframeControl {
  function updateCoreValuesOnStore(): void {
    if (process.env.NODE_ENV === "production") {
      const query = new URLSearchParams(window.location.search);
      const apiKey = query.get("apikey") ?? "";
      const page = query.get("page") ?? "";
      const fingerprint = query.get("fingerprint") ?? "";

      setCurrentPage(page);
      setApikey(apiKey);
      setFingerprint(fingerprint);
      return;
    }

    setCurrentPage("https://www.google.com");
    setApikey("123");
    setFingerprint("123");
  }

  function notifyOpen(): void {
    window.parent.postMessage({ isWidget: true, isOpen: true }, "*");
  }

  function notifyClose(): void {
    window.parent.postMessage({ isWidget: true, isOpen: false }, "*");
  }

  return {
    updateCoreValuesOnStore,
    notifyOpen,
    notifyClose,
  };
}
