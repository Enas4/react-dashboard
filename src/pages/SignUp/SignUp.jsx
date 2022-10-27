import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange" });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">First Name</label>
          <input type="text" {...register("firstname", { required: true })} />
          {errors.firstname && <span>enter first name</span>}
          <br />
          <br />
          <label htmlFor="">Last Name</label>
          <input type="text" {...register("lastname", { required: true })} />
          {errors.lastname && <span>enter last name</span>}
          <br />
          <br />
          <label htmlFor="">User Name</label>
          <input type="text" {...register("username", { required: true })} />
          {errors.username && <span>enter user name</span>}
          <br />
          <br />
          <label htmlFor="">Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>enter first name</span>}
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password", {
              required:
                "password must contain 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number",
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <br />
          <br />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            {...register("confirm_password", {
              required: true,
              validate: (value) => {
                const { password } = getValues();
                if (value !== password) {
                  return "Password do not match!";
                }
              },
            })}
          />
          {errors.confirm_password && (
            <span>{errors.confirm_password.message}</span>
          )}
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
