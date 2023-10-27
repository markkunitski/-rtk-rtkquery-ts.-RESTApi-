import { useEffect } from "react";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreator";
function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    // <div style={{ display: 'flex', alignItems: 'end' }}>
    //   <PostContainer></PostContainer>
    // </div>
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((elem, i) => (
        <p key={i}>
          {elem.email} {elem.id} {elem.name}
        </p>
      ))}
    </div>
  );
}

export default App;
