export function threeLatest(boardgames) {
  const now = new Date();
  const closest = boardgames
    .map((bg) => ({
      ...bg,
      distance: Math.abs(new Date(bg.created_at) - now),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);
  return closest;
}
