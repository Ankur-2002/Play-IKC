import { useEffect } from "react";
import PageNotFound from "components/error/PageNotFound";

const PaytmModal = () => {
  useEffect(() => {
    const pageData = localStorage.getItem("pageData");
    if (!pageData) {
      return;
    }

    window.document.body.innerHTML = pageData;
    document.f1.submit();

    localStorage.removeItem("pageData");
  }, []);

  return <PageNotFound />;
};

export default PaytmModal;
