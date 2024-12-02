export function Logout() {
  return (
    <a
      href="/api/auth/logout"
      className="text-red-500 bg-red-100 p-2 rounded-md"
    >
      Logout
    </a>
  );
}
