import { useState } from 'react';
import MultiSelectDropDown from './Components/MultiSelectDropDown/MultiSelectDropDown';
import { Items } from './Components/MultiSelectDropDown/Types';
import { Initialitems } from './Asset/Enum/Enum';
import './App.scss';

function App() {
  const [selected, setSelected] = useState<Items[]>([]);
  const [items, setItems] = useState<Items[]>(Initialitems);

  return (
    <div className="App">
      <MultiSelectDropDown
        items={items}
        setItems={setItems}
        placeholder="select or type item ... "
        setState={setSelected}
        state={selected}
        maxLength={20}
      />
    </div>
  );
}

export default App;
