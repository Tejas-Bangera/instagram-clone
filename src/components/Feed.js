import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto py-8 gap-x-8">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>

      {/* Section */}
      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-15">
          {/* MiniProfile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
};
export default Feed;
