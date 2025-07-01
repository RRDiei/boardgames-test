import { useContext } from "react";
import { UserContext } from "../src/App";

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("No user context provided!");
  }

  return context;
}
