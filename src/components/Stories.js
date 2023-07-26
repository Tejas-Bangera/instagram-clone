import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fakeProfiles = [
      [...Array(20)].map((_, index) => ({
        name: faker.person.firstName(),
        username: faker.internet.displayName(),
        avatar: faker.internet.avatar(),
        id: index,
      })),
    ];

    setStories(fakeProfiles[0]);
  }, []);

  return (
    <div className="flex space-x-4 px-4 py-6 bg-white overflow-x-scroll border border-gray-200 rounded-md scrollbar-thin scrollbar-thumb-gray-300">
      {session && (
        <Story avatar={session.user.image} username={session.user.username} />
      )}
      {stories.map((profile) => (
        <Story
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};
export default Stories;
