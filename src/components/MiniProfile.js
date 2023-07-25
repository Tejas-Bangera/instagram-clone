const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-lg border">
      <img
        className="w-16 h-16 object-contain rounded-full border p-[2px]"
        src="http://dergipark.org.tr/assets/app/images/buddy_sample.png"
        alt="Profile picture"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Tejas Bangera</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};
export default MiniProfile;
