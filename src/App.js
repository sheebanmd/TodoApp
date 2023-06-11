import Auth from "./Component/Auth/Auth";
import Todo from "./Component/Todo/Todo";
import { useUserContext } from "./context/userContext";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Todo /> : <Auth />} </>}
    </div>
  );
}

export default App;
