export default function TournamentsItem({ torneo }) {
    return (
        <a
            className={`block hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ${
                torneo.active ? 'active="true"' : ""
            }`}
            href={torneo.id}
        >
            <img
                className="aspect-[389/500] h-full object-cover w-full max-w-full rounded"
                src={torneo.flayer}
                alt="Flayer"
            />
        </a>
    );
}
