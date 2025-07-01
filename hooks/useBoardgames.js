import { useContext } from "react";
import { BoardgameContext } from "../src/App";

export function useBoardgameContext() {
  const context = useContext(BoardgameContext);

  if (!context) {
    throw new Error("No context provided!");
  }

  return context;
}
