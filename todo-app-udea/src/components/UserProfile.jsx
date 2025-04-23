function UserProfile({ user, setUser }) {
  return (
    <div
    className="flex items-center justify-between p-4 border-b border-gray-200">
      <p className="text-lg"> Bienvenido <span className="font-bold">{user}</span> </p>

      <input type="text" 
        className="m4 border rounded"
        placeholder="Ingresa tu nombre"
        onChange={(e) => setUser(e.target.value)}/>
    </div>
  );
}

export default UserProfile;