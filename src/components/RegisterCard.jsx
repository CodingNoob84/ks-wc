import { Register } from "./Register";
import { Button } from "./ui/button";

export const RegisterCard = () => {
  return (
    <div className="relative  h-[500px] overflow-hidden">
      <img
        src="/images/Bachelorbash.png"
        alt="Card Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-5 left-0 w-full  p-5">
        <Button className="w-full">
          <Register />
        </Button>
      </div>
    </div>
  );
};
