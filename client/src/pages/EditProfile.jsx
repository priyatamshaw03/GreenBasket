import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { assets } from "../assets/assets";

const EditProfile = () => {
  const { user, axios, setUser } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
      setPreviewUrl(user.profileImage || "");
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const profileData = new FormData();
      profileData.append("name", formData.name);
      profileData.append("email", formData.email);
      profileData.append("phone", formData.phone);
      if (image) {
        profileData.append("profileImage", image);
      }

      const res = await axios.put("/api/user/profile", profileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success("Profile updated!");
        setUser(res.data.user);
      } else {
        toast.error(res.data.message || "Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-500">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
        <div className="flex items-center gap-6">
          <img
            src={previewUrl || assets.profile_icon}
            alt="Profile Preview"
            className="w-20 h-20 rounded-full object-cover border"
          />
          <label className="cursor-pointer text-sm text-green-500 hover:underline">
            Change Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 p-2 rounded-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 p-2 rounded-full"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 p-2 rounded-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
