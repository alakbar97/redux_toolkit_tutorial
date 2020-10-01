import React, { useState } from "react";
import { useInjectSaga, useInjectReducer } from "redux-injectors";
import { useSelector, useDispatch } from "react-redux";

import { dogsKey, actions, reducer } from "./app/redux";
import saga from "./app/saga";

const App = () => {
  useInjectReducer({ key: dogsKey, reducer });

  useInjectSaga({ key: dogsKey, saga });

  const dispatch = useDispatch();

  const dog = useSelector((state) => state.Dogs.data);

  const loading = useSelector((state) => state.Dogs.loading);

  const error = useSelector((state) => state.Dogs.error);

  const [dogName, setDogName] = useState("");

  const onButtonHandler = (e) => {
    e.preventDefault();
    dispatch(actions.fetchDogBreed(dogName));
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <input
        style={{ marginRight: 15 }}
        placeholder="Enter Dog Breed"
        value={dogName}
        onChange={(e) => setDogName(e.target.value)}
      />
      <button style={{ marginBottom: 25 }} onClick={onButtonHandler}>
        Search Dog
      </button>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>There is no such a dog breed available</p>
      ) : (
        <div>
          {dog ? (
            <img
              style={{ width: 300, height: 300 }}
              alt="dog_photo"
              src={dog}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default App;
