import SignUpForm from "./_components/sign-up-form";

const SignUp = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col items-center">
        <h2 className=" font-inter tracking-wide">
          Welcome to <b className="font-ubuntu text-2xl">CareSync</b>
        </h2>
        <span className="text-muted-foreground tracking-wide text-base">
          Please create your account
        </span>
      </div>
      <div className="mt-8 container mx-auto">
        <SignUpForm />
      </div>
    </div>
  );
};
export default SignUp;
