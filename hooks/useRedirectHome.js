import { useEffect } from "react";
import { useNavigate } from "react-router";

const useRedirectHome = (user, toastMessage) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/", {
        state: { showToast: true, message: toastMessage },
      });
    }
  }, [user, navigate]);
};

export default useRedirectHome;
