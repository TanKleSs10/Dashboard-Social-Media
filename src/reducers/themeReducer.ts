export type ThemeState = "light" | "dark";

type ThemeAction = { type: "TOGGLE_THEME" };

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  if (action.type === "TOGGLE_THEME") {
    return state === "light" ? "dark" : "light";
  }
  return state;
};
