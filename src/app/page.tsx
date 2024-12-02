import { Login } from "@/components/auth/Login";
import { Logout } from "@/components/auth/Logout";
import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileServer() {
  const sesstion = await getSession();

  const user = sesstion?.user;

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="p-4 bg-gray-100 rounded-md gap-4 flex flex-col">
          <div className="">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>

          <Logout />
        </div>
      </div>
    );
  }

  return <Login />;
}
