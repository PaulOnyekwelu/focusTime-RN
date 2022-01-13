export interface iRoundedButton {
  style?: object;
  textStyle?: object;
  size: number;
  title: string;
}

export interface iFocus {
  addSubject: (input:string) => void
}