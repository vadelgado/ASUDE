import React, { useState } from "react";

const TournamentSchedule = () => {
    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const days = [
        {
            date: "Domingo, 25 de febrero",
            matches: [
                { team1: "GDC", team2: "CRV", score: "1 - 3", time: "15:00h CDMX" },
                { team1: "PRS", team2: "RTN", score: "1 - 2", time: "16:00h CDMX" },
                { team1: "CHA", team2: "MCH", score: "2 - 5", time: "17:00h CDMX" },
                { team1: "WSN", team2: "RAN", score: "2 - 1", time: "18:00h CDMX" },
                { team1: "PRC", team2: "LA", score: "4 - 2", time: "18:00h CDMX" },
                { team1: "PLC", team2: "OUN", score: "8 - 3", time: "20:00h CDMX" },
            ],
        },
        {
            date: "Domingo, 3 de marzo",
            matches: [
                { team1: "MCH", team2: "GDC", score: "3 - 2", time: "15:00h CDMX" },
                { team1: "RTN", team2: "WSN", score: "6 - 3", time: "16:00h CDMX" },
                { team1: "OUN", team2: "PRS", score: "", time: "17:00h CDMX" },
                // Agrega más partidos según sea necesario
            ],
        },
        // Agrega más días y partidos según sea necesario
    ];

    const handlePrevDay = () => {
        if (currentDayIndex > 0) {
            setCurrentDayIndex(currentDayIndex - 1);
        }
    };

    const handleNextDay = () => {
        if (currentDayIndex < days.length - 1) {
            setCurrentDayIndex(currentDayIndex + 1);
        }
    };

    return (
        <div className="container mx-auto py-6 pt-40">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-black">
                    {days[currentDayIndex].date}
                </h1>
                <div className="flex space-x-2">
                    <button
                        onClick={handlePrevDay}
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                        disabled={currentDayIndex === 0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNextDay}
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                        disabled={currentDayIndex === days.length - 1}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-2">
                {days[currentDayIndex].matches.map((match, index) => (
                    <div
                        key={index}
                        className="bg-[#141414] text-white rounded-md p-3.5 flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-bold">{match.team1}</span>
                            <span className="text-lg">{match.score}</span>
                            <span className="font-bold">{match.team2}</span>
                        </div>
                        <div className="text-center text-gray-400 mt-2">
                            {match.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TournamentSchedule;
