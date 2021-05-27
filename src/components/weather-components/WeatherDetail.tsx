interface IProps {
  id: number;
  name: string;
  temperature: number;
  addFavorite: (id: number) => void;
  setPopUp: (value: boolean) => void;
}

export default function WeatherDetail(props: IProps): JSX.Element {
  const { addFavorite, id, name, setPopUp, temperature } = props;

  const handleClick = (id: number): void => {
    addFavorite(id);
    setPopUp(true);
  };

  return (
    <div className="card">
      <p className="city">{name}</p>
      <p className="temperature">{temperature} ° C</p>
      <button
        type="button"
        aria-label="favorite button"
        onClick={() => handleClick(id)}
        className="general_btn"
      >
        favorite
      </button>
    </div>
  );
}
