import React, { useState } from "react";
import { useInjectSaga, useInjectReducer } from "redux-injectors";
import { useSelector, useDispatch } from "react-redux";

import { dogsKey, actions, reducer } from "./app/redux";
import saga from "./app/saga";

const App = () => {
  useInjectReducer({ key: dogsKey, reducer });

  useInjectSaga({ key: dogsKey, saga });

  const dispatch = useDispatch();

  const dog = useSelector((state) => state.getDogs.data);

  const loading = useSelector((state) => state.getDogs.loading);

  const [dogName, setDogName] = useState("");

  const onButtonHandler = (e) => {
    e.preventDefault();
    dispatch(actions.fetchDogBreed(dogName));
  };

  return (
    <div className="App">
      <input
        placeholder="Enter Dog Breed"
        value={dogName}
        onChange={(e) => setDogName(e.target.value)}
      />
      <button onClick={onButtonHandler}>Search Dog</button>
      {loading ? (
        <p>Loading ...</p>
      ) : dog ? (
        <div>
          <img alt="phot" src={dog?.message} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
