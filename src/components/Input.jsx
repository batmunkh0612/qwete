import { CiSearch } from "react-icons/ci";

export const Input = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-2 w-fit rounded-xl bg-[#F3F4F6]">
      <CiSearch className="fill-black"></CiSearch>
      <input
        className="bg-transparent focus-visible: border-none outline-none text-black"
        type="text"
      ></input>
    </div>
  );
};
