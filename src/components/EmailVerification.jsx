import { useForm } from "react-hook-form";
import "./EmailVerification.scss";

export default function EmailVerification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(JSON.stringify(values, null, 2));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="emailForm flex gap-2">
      <div className="inputDiv flex column">
        <input
          className={`${errors.email ? "emailError" : "emailInput"}`}
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && (
          <span className="errorMessage">
            Whoops, make sure it&apos;s an email
          </span>
        )}
        {errors.email && (
          <div>
            <img src="/icon-error.svg" alt="Error sign" className="errorSign" />
          </div>
        )}
      </div>
      <input type="submit" value="Contact Us" className="contactButton" />
    </form>
  );
}
