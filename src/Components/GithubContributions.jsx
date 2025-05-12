import React, { useEffect, useState } from "react";

const GithubContributions = () => {
  const [contributions, setContributions] = useState(null);
  const [lastyearContributions, setLastyearContributions] = useState(0);
  const username = "AboubakarArisar";

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}`
        );
        const data = await response.json();
        setContributions(data);
        console.log(data);

        setLastyearContributions(data.total["2025"]);
        console.log(lastyearContributions);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchContributions();
  }, []);

  if (!contributions) {
    return (
      <div className='w-full md:w-[80vw] mx-auto px-4 py-10'>
        <div className='animate-pulse bg-zinc-800 rounded-lg h-[200px]'></div>
      </div>
    );
  }

  const totalContributions = contributions.contributions.reduce(
    (sum, day) => sum + day.count,
    0
  );

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  for (let i = contributions.contributions.length - 1; i >= 0; i--) {
    if (contributions.contributions[i].count > 0) {
      tempStreak++;
      if (i === 0) {
        currentStreak = tempStreak;
      }
    } else {
      if (tempStreak > longestStreak) {
        longestStreak = tempStreak;
      }
      tempStreak = 0;
    }
  }

  return (
    <div className='w-full md:w-[80vw] mx-auto px-4 py-10'>
      <h2 className='text-3xl font-semibold text-zinc-100 mb-6 pb-2'>
        GitHub Activity
      </h2>
      <div className='bg-[#1f1e26] rounded-lg p-6 shadow-2xl'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-xl font-semibold text-[#8B8A91]'>
            Contribution Graph
          </h3>
          <a
            href={`https://github.com/${username}`}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-500 hover:bg-green-600  px-4 py-2 rounded-lg  text-white font-semibold transition-colors duration-300'
          >
            View Profile →
          </a>
        </div>
        <div className='overflow-x-auto'>
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt='GitHub Contributions'
            className='w-full'
          />
        </div>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='bg-zinc-700/50 shadow-2xl p-4 rounded-lg'>
            <h4 className='text-[#8B8A91] text-sm'>Total Contributions</h4>
            <p className='text-2xl font-bold text-zinc-100'>
              {totalContributions}
            </p>
          </div>
          <div className='bg-zinc-700/50 shadow-2xl p-4 rounded-lg'>
            <h4 className='text-[#8B8A91] text-sm'>Last Year</h4>
            <p className='text-2xl font-bold text-zinc-100'>
              {lastyearContributions}
            </p>
          </div>
          <div className='bg-zinc-700/50 shadow-2xl p-4 rounded-lg'>
            <h4 className='text-[#8B8A91] text-sm'>Longest Streak</h4>
            <p className='text-2xl font-bold text-zinc-100'>
              {longestStreak} days
            </p>
          </div>
          <div className='bg-zinc-700/50 shadow-2xl p-4 rounded-lg'>
            <h4 className='text-[#8B8A91] text-sm'>Current Streak</h4>
            <p className='text-2xl font-bold text-zinc-100'>
              {currentStreak} days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;
