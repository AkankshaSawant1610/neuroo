export const calculateScore = (answers) => {
  const total = answers.reduce((acc, curr) => acc + curr, 0);
  if (total <= 2) return { level: "Peaceful", color: "text-green-500", bg: "bg-green-100", message: "You are doing wonderfully today!" };
  if (total <= 5) return { level: "Mildly Foggy", color: "text-orange-400", bg: "bg-orange-100", message: "A little self-care could brighten your day." };
  return { level: "Heavy", color: "text-rose-500", bg: "bg-rose-100", message: "It's okay to feel this way. Let's find some calm together." };
};