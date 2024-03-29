import { useSession, signOut } from "next-auth/react";
const MiniProfile = () => {
    const { data: session } = useSession();
    return (
      <div className="flex items-center justify-between ml-10 mt-14">
        <img
          className="h-16 rounded-full border p-[2px]"
          src={session?.user.image}
          alt="user-image"
        />
        <div className="flex-1 ml-4">
          <h2 className="font-bold">{session?.user.username}</h2>
          <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button onClick={signOut} className="text-sm font-semibold text-blue-400">
          Sign out
        </button>
      </div>
    );
}

export default MiniProfile;
