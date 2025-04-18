import Fakechatpanel from "@/components/one-time/Fakechatpanel";
import Lateslateintro from "@/components/one-time/Lateslateintro";

export default function Home() {
  return (
    <>
      <Fakechatpanel />
      <h1 className="m-auto w-sm text-center font-bold text-2xl">
        How does it work?
      </h1>
      <Lateslateintro />
    </>
  );
}
