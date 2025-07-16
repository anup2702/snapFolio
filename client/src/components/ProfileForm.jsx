const ProfileForm = ({ profile, setProfile }) => {
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Your Profile</h2>
      <input name="name" type="text" placeholder="Name"
        value={profile.name} onChange={handleChange}
        className="input mb-2 w-full" />

      <input name="bio" type="text" placeholder="Short Bio"
        value={profile.bio} onChange={handleChange}
        className="input mb-2 w-full" />

      <input name="avatar" type="text" placeholder="Avatar Image URL"
        value={profile.avatar} onChange={handleChange}
        className="input mb-2 w-full" />

      <input name="github" type="text" placeholder="GitHub Link"
        value={profile.github} onChange={handleChange}
        className="input mb-2 w-full" />

      <input name="linkedin" type="text" placeholder="LinkedIn Link"
        value={profile.linkedin} onChange={handleChange}
        className="input mb-2 w-full" />

      <input name="twitter" type="text" placeholder="Twitter Link"
        value={profile.twitter} onChange={handleChange}
        className="input mb-2 w-full" />
    </div>
  );
};

export default ProfileForm;
