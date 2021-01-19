import { Fragment, useEffect, useState } from "react";
import { ListWrapper, ListTitle, ListItem } from "./List";
import { getItems } from "../WebAPI";
import { transferDate } from "../utills";
function App() {
  const [items, setItems] = useState([]);

  // sort by desc
  if (items.length) {
    items.sort((a, b) => {
      return transferDate(b.date) - transferDate(a.date);
    });
  }
  let itemsInProcess = items.filter(
    (item) => item.status.code === 1 || item.status.code === 2
  );
  let itemsFinished = items.filter(
    (item) => item.status.code === 3 || item.status.code === 4
  );

  // init
  useEffect(() => {
    setItems(getItems());
  }, []);

  return (
    <Fragment>
      <ListWrapper>
        <ListTitle>
          <h3>進行中</h3>
        </ListTitle>
        {itemsInProcess.map((item, index) => (
          <ListItem info={item} key={index} />
        ))}
        <ListTitle>
          <h3>已完成</h3>
        </ListTitle>
        {itemsFinished.map((item, index) => (
          <ListItem info={item} key={index} />
        ))}
      </ListWrapper>
    </Fragment>
  );
}

export default App;
