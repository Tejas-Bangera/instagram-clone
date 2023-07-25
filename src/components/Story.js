const Story = ({ username, avatar }) => {
  return (
    <div className="hover:scale-110 transition-all duration-200 ease-out cursor-pointer">
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-400 object-contain"
        src={avatar}
        alt="profile picture"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};
export default Story;
