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
}

export interface iTimer {
  focusSubject: string;
  setFocusSubject: (input: string) => void;
}

export interface iCounter {
  minutes: number;
  isStarted: boolean;
  shouldReset: boolean;
  setProgress: (val: number) => void;
  finishReset: () => void
}

export interface iProgressBar {
  progress: number
}
