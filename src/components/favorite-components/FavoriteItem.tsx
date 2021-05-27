interface IProps {
  id: number;
  name: string;
  removeFavorite: (id: number) => void;
  temperature: number;
  setPopUp: (value: boolean) => void;
}

export default function FavoriteItem(props: IProps): JSX.Element {
  const { id, name, removeFavorite, setPopUp, temperature } = props;

  const handleClick = (id: number): void => {
    removeFavorite(id);
    setPopUp(true);
  };

  return (
    <div className="card">
      <p className="city">{name}</p>
      <p className="temperature">{temperature}</p>
      <button
        type="button"
        aria-label="delete button"
        onClick={() => handleClick(id)}
        className="general_btn"
      >
        delete
      </button>
    </div>
  );
}
