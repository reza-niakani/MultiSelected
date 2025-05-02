/* eslint-disable @typescript-eslint/no-unused-vars */
import { Items, Props } from './Types';
import style from './Styling.module.scss';
import { useEffect, useRef, useState } from 'react';
import ArrowDown from './../../Asset/Pictures/Icons/down-arrow.png';

const MultiSelectDropDown: React.FC<Props> = ({
  setItems,
  items,
  placeholder = '',
  setState,
  state,
  maxLength = 200,
}) => {
  const [newText, setNewText] = useState<string>('');
  const [show, setShow] = useState<Boolean>(false);

  const content = useRef<HTMLDivElement>(null);

  const handlecloselist = (event: MouseEvent) => {
    if (content.current && !content.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handlecloselist);
    return () => {
      document.addEventListener('mousedown', handlecloselist);
    };
  }, []);

  const SubmitNewItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newText) {
      setItems((prev: Items[]) =>
        prev
          ? [{ value: newText, key: Date.now() }, ...prev]
          : [{ value: newText, key: Date.now() }]
      );
      setNewText('');
    } else {
      return null;
    }
  };

  const isSelected = (id: string | number): boolean => {
    return !!state?.find((item) => item?.key === id);
  };

  const handleSelect = (select: Items) => {
    if (isSelected(select?.key)) {
      setState((prev) => prev?.filter((item) => item?.key !== select?.key));
    } else {
      setState((prev) => (prev ? [...prev, select] : [select]));
    }
  };

  console.log('items', state);

  return (
    <div className={style.main} ref={content}>
      {/*  */}
      <form className={style.form} onSubmit={(e) => SubmitNewItem(e)}>
        <input
          type="text"
          onClick={() => setShow(!show)}
          value={newText}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(e) => setNewText(e.target.value)}
          className={style.input}
        />
        <img
          src={ArrowDown}
          className={` ${show ? style.iconNotShow : style.iconShow}  ${style.icon}`}
          alt="downarrow"
        />
      </form>
      {/*  items */}
      {show && (
        <div className={style.ItemsContainer}>
          {' '}
          <div className={style.Itemsbox}>
            {items?.map((item, index) => (
              <div
                onClick={() => handleSelect(item)}
                key={index}
                className={`${isSelected(item?.key ?? '') && style.activeItem} ${style.Items} `}
              >
                <span>{item?.value}</span>
                {isSelected(item?.key ?? '') && (
                  <span style={{ color: 'rgba(59, 95, 212, 0.979)' }}>✔</span>
                )}{' '}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropDown;
