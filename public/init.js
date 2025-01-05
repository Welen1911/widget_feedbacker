const init = (apikey) => {
  const handleLoadWidget = async () => {
    const page = `${window.location.origin}${window.location.pathname}`;

    const fp = await window.FingerprintJS.load();
    const fingerprint = await fp.get();

    const WIDGET_URL = `https://main--welen1911-feedbacker-widget.netlify.app?api_key=${apikey}&fingerprint=${fingerprint.visitorId}&page=${page}`;

    const config = { method: "GET" };

    const response = await fetch(
      `https://feed-backer-backend.vercel.app/api/api/apikey/exists?apikey=${apikey}`,
      config
    );

    if (response.status === 200) {
      const iframe = document.createElement("iframe");
      iframe.src = WIDGET_URL;
      iframe.id = "feedbacker-iframe";
      iframe.style.position = "fixed";
      iframe.style.bottom = "0px";
      iframe.style.right = "0px";
      iframe.style.overflow = "hidden";
      iframe.style.border = "0px";
      iframe.style.zIndex = "99999";
      document.body.appendChild(iframe);

      window.addEventListener("message", (event) => {
        if (!event.data.isWidget) return;

        if (event.data.isOpen) {
          iframe.width = "100%";
          iframe.height = "100%";
        } else {
          iframe.width = "300px";
          iframe.height = "150px";
        }
      });

      return;
    }

    console.log("* [feedbacker] was not loaded because apikey dos not exists");
  };

  const script = document.createElement("script");
  script.src = "https://openfpcdn.io/fingerprintjs/v4/iife.min.js";
  script.async = "async";
  script.addEventListener("load", handleLoadWidget);

  document.body.appendChild(script);
};

window.init = init;
