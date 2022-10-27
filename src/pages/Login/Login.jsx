import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange" });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { username, password } = getValues();
    if (username === "enas" && password === "12345Aa1") {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
      console.log(data);
      return;
    }
    alert("username or password is incorrect");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Username</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <span>Enter username</span>}
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>enter correct password</span>}
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
