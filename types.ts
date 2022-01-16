import { GestureResponderEvent } from "react-native";

export interface iRoundedButton {
  style?: object;
  textStyle?: object;
  size?: number;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export interface iFocus {
  setFocusSubject: (input: string) => void;
  focusHistory: iFocusHistoryItem[] | [];
  clearHistory: () => void
}

export interface iTimer {
  focusSubject: string;
  setFocusSubject: (input: string) => void;
  onTimerEnd: () => void;
  backButtonHandler: () => void;
  addToHistory: (subject: string, completed: boolean) => void;
}

export interface iCounter {
  minutes: number;
  isStarted: boolean;
  shouldReset: boolean;
  setProgress: (val: number) => void;
  finishReset: () => void;
  isCompleted: boolean;
}

export interface iProgressBar {
  progress: number;
}

export interface iTiming {
  changeTimeHandler: (val: number, type?: string) => void;
}

export interface iFocusHistoryItem {
  key: string;
  subject: string;
  completed: boolean;
}

export interface iFocusHistory {
  focusHistory: iFocusHistoryItem[] | [];
  clearHistory: () => void
}
