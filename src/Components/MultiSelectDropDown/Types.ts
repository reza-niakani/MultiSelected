export interface Items {
  value: string;
  key: number;
}

export interface Props {
  items?: Items[];
  state?: Items[];
  setState?: (state: Items[]) => void;
  placeholder?: string;
}
