// src/features/assessments/utils/scoringUtils.js

export const calculateScore = (testId, answers) => {
  let scoreValue = 0;
  let level = "";
  let color = "text-slate-800";
  let bg = "bg-slate-100";
  let message = "";

  if (testId === 'bipolar') {
    // MDQ Logic: 7+ Yes in Part 1 AND Part 2 Yes AND Part 3 Moderate/Serious
    const part1YesCount = answers.slice(0, 13).filter(a => a === 1).length;
    const part2SameTime = answers[13] === 1; 
    const part3Problem = answers[14] >= 2;   

    const isPositive = part1YesCount >= 7 && part2SameTime && part3Problem;
    
    scoreValue = part1YesCount;
    level = isPositive ? "Positive Screen" : "Negative Screen";
    message = isPositive ? "High likelihood of Bipolar Spectrum Disorder." : "Low likelihood of Bipolar Spectrum Disorder.";
    color = isPositive ? "text-rose-500" : "text-green-500";
    bg = isPositive ? "bg-rose-100" : "bg-green-100";

  } else if (testId === 'ocd') {
    scoreValue = answers.reduce((acc, val) => acc + val, 0);
    if (scoreValue <= 10) { level = "Minimal"; color = "text-green-500"; bg = "bg-green-100"; message = "Minimal OCD symptoms detected."; }
    else if (scoreValue <= 20) { level = "Mild"; color = "text-blue-500"; bg = "bg-blue-100"; message = "Mild OCD symptoms detected."; }
    else if (scoreValue <= 30) { level = "Moderate"; color = "text-orange-500"; bg = "bg-orange-100"; message = "Moderate OCD symptoms detected."; }
    else { level = "Severe"; color = "text-rose-500"; bg = "bg-rose-100"; message = "Severe OCD symptoms detected."; }

  } else if (testId === 'anxiety') {
    scoreValue = answers.reduce((acc, val) => acc + val, 0);
    if (scoreValue <= 4) { level = "Minimal"; color = "text-green-500"; bg = "bg-green-100"; message = "You're doing great!"; }
    else if (scoreValue <= 9) { level = "Mild"; color = "text-blue-500"; bg = "bg-blue-100"; message = "A little anxiety is normal."; }
    else if (scoreValue <= 14) { level = "Moderate"; color = "text-orange-500"; bg = "bg-orange-100"; message = "Consider talking to someone."; }
    else { level = "Severe"; color = "text-rose-500"; bg = "bg-rose-100"; message = "Please seek professional support."; }

  } else if (testId === 'depression') {
    scoreValue = answers.reduce((acc, val) => acc + val, 0);
    if (scoreValue <= 4) { level = "Minimal"; color = "text-green-500"; bg = "bg-green-100"; message = "Your mood seems stable."; }
    else if (scoreValue <= 9) { level = "Mild"; color = "text-blue-500"; bg = "bg-blue-100"; message = "You might be feeling a bit down."; }
    else if (scoreValue <= 14) { level = "Moderate"; color = "text-orange-500"; bg = "bg-orange-100"; message = "Help is available if you need it."; }
    else { level = "Severe"; color = "text-rose-500"; bg = "bg-rose-100"; message = "Please reach out to a professional."; }

  } else if (testId === 'stress') {
    // PSS-10 Sum with Reverse Scoring for items 4, 5, 7, 8 (indices 3, 4, 6, 7)
    scoreValue = answers.reduce((acc, val, idx) => {
        if ([3, 4, 6, 7].includes(idx)) return acc + (4 - val);
        return acc + val;
    }, 0);
    if (scoreValue <= 13) { level = "Low Stress"; color = "text-green-500"; bg = "bg-green-100"; message = "You are managing well."; }
    else if (scoreValue <= 26) { level = "Moderate Stress"; color = "text-orange-500"; bg = "bg-orange-100"; message = "Try some relaxation tools."; }
    else { level = "High Stress"; color = "text-rose-500"; bg = "bg-rose-100"; message = "Your load is very heavy right now."; }
  }

  return { score: scoreValue, level, color, bg, message, testId };
};