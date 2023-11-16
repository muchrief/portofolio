import { useEffect, useState } from "react";

const appName = "Organization";

function useTitle(title?: string) {
  const [t] = useState(appName);

  useEffect(() => {
    if (t == appName) {
      if (title) {
        document.title = title + " - " + t;
      } else {
        document.title = t;
      }
    } else {
      document.title = t;
    }

    return () => {
      document.title = appName;
    };
  }, [title, t]);

  return;
}

export default useTitle;
