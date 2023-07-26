import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestedUsers = [...Array(5)].map((_, index) => ({
      id: index,
      avatar: faker.internet.avatar(),
      username: faker.internet.displayName(),
      companyName: faker.company.name(),
    }));

    setSuggestions(suggestedUsers);
  }, []);

  return (
    <div className="mt-5 bg-white p-5 rounded-lg border">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profile.avatar}
            className="w-10 h-10 rounded-full p-[2px] border"
            alt="Profile picture"
          />
          <div className="flex-1 mx-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.companyName}
            </h3>
          </div>
          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};
export default Suggestions;
