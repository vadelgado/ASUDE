import TournamentsItem from "./TournamentsItem.jsx";

export default function ListOfTournaments({ torneo }) {
    return (
        <li>
            <TournamentsItem torneo={torneo}></TournamentsItem>
        </li>
    );
}
