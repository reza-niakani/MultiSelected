import { Props } from './Types';
import style from './Styling.module.scss';
import { useState } from 'react';

const MultiSelectDropDown: React.FC<Props> = ({ items, placeholder, setState, state }) => {
  const [newText, setNewText] = useState<string>('');
  const [currentItem, setCurrentItem] = useState<string | null>('');
  const [option, setOption] = useState<string[] | []>();
  const [show, setShow] = useState<Boolean>(false);

  const SubmitNewItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newText) {
      setOption((prev) => (prev ? [...prev, newText] : [newText]));
    } else {
      setOption([]);
    }
  };

  console.log('option', option);

  return (
    <div className={style.main}>
      {/*  */}
      <form className={style.form} onSubmit={(e) => SubmitNewItem(e)}>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className={style.input}
        />
      </form>
      {/*  items */}
      {show && <></>}
    </div>
  );
};

export default MultiSelectDropDown;
