import CreateLobbyForm from "@/components/CreateLobbyForm";

export default function page() {
  return (
    <>
      <h1 className="m-auto w-sm text-center font-bold text-2xl">
        Create a Lobby
      </h1>
      <CreateLobbyForm />
    </>
  );
}
