import React, { useState } from "react";

const initialUser = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  joined: "January 2024",
};

const ProfilePage = () => {
  const [user, setUser] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  });

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setForm({ name: user.name, email: user.email, avatar: user.avatar });
    setEditing(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "avatar" && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setForm((prev) => ({ ...prev, avatar: ev.target?.result as string }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ ...user, ...form });
    setEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-28 h-28 rounded-full border-4 border-blue-200 mb-4 shadow"
        />
        <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
        <p className="text-gray-500 mb-2">{user.email}</p>
        <span className="text-xs text-gray-400 mb-4">Joined {user.joined}</span>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-2"
          onClick={handleEdit}
        >
          Edit Profile
        </button>
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition">
          Logout
        </button>
      </div>

      {/* Edit Profile Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form
            className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative animate-fade-in"
            onSubmit={handleSave}
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={handleCancel}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Edit Profile</h2>
            <div className="flex flex-col items-center mb-4">
              <img
                src={form.avatar}
                alt="Avatar preview"
                className="w-20 h-20 rounded-full border-2 border-blue-200 mb-2 object-cover"
              />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                className="mb-2"
              />
              <input
                type="text"
                name="avatar"
                value={form.avatar}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Avatar URL"
              />
              <span className="text-xs text-gray-400 mt-1">
                Upload a photo or paste an image URL
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex gap-2 justify-center">
              <button
                type="button"
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
