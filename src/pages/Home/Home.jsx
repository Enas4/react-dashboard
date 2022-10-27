import { useNavigate } from "react-router-dom";

const Home = () => {
  const { username } = JSON.parse(localStorage.getItem("user")) || {};

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <p>Welcome {username} to our home page</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
