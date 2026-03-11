import { PageLayout } from "../components/Layout/PageLayout";

// TODO: replace with actual games-specific components
const GamesContent = () => (
  <div style={{ padding: 24 }}>
    <h1>Games Page</h1>
    <p>Here will be content for the games section.</p>
  </div>
);

const Games = () => {
  return (
    <PageLayout>
      <GamesContent />
    </PageLayout>
  );
};

export default Games;
