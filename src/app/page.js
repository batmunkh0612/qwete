import { Card, Radius } from "@/components";
import { Input } from "@/components/Input";

const radiusSizes = ["size-[340px]", "size-[540px]", "size-[940px] bg-[]"];

export default function Home({ }) {
  return (
    <div className="relative flex h-screen">
      {radiusSizes.map((size, index) => (
        <Radius key={index} className={size} />
      ))}
      <div className="size-full bg-[#F3F4F6] flex justify-center items-center" >

      </div>
      <div className="size-full bg-[#0F141E] flex justify-center items-center" >
        <Input></Input>
      </div>
    </div >
  );
}
