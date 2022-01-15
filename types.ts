import { GestureResponderEvent } from "react-native";

export interface iRoundedButton {
  style?: object;
  textStyle?: object;
  size: number;
  title: string;
  onPress: (event: GestureResponderEvent) => void
}

export interface iFocus {
  setFocusSubject: (input:string) => void
}