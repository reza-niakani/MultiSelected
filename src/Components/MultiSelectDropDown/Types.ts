import { SetStateAction } from 'react';

export interface Items {
  value: string;
  key: number | string;
}

export interface Props {
  items: Items[];
  state: Items[];
  setState: React.Dispatch<SetStateAction<Items[]>>;
  setItems: React.Dispatch<SetStateAction<Items[]>>;
  placeholder?: string;
  maxLength?: number;
}
