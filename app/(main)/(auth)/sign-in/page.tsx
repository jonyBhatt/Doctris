import Image from "next/image";
import { SignInForm } from "./_components/sign-in-form";

const SignIn = () => {
  return (
    <section className="loginpage flex w-full  justify-center items-center gap-4">
      <div className="flex flex-col w-full items-center gap-4">
        <div className="flex items-center gap-1">
          <Image src={"/assets/logo.png"} alt="logo" width={50} height={50} />
          <h2 className="font-bold font-ubuntu text-4xl">CareSync</h2>
        </div>
        <div className="p-4 w-1/3 shadow-md rounded  bg-white border border-primary-foreground">
          <h2 className="font-semibold font-inter text-xl tracking-wide text-center">
            Sign In
          </h2>
          <SignInForm />
        </div>
      </div>
    </section>
  );
};
export default SignIn;
