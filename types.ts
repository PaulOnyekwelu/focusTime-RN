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
  setIsStarted: (val: boolean) => void;
  setProgress: (val: number) => void
}

export interface iProgressBar {
  progress: number
}
