import TournamentsItem from "./TournamentsItem.jsx";

export default function ListOfTournaments({ torneo }) {
    return (
        <li>
             <h3 className="mb-2 text-lg font-bold text-gray-800">{torneo.nombreTorneo}</h3>
            <TournamentsItem torneo={torneo}></TournamentsItem>
        </li>
    );
}
