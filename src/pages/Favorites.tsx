import FavoritesList from "../components/favorite-components/FavoritesList";

export default function Favorites() {
  const data = localStorage.getItem("cities");
  const favoriteCities = data && JSON.parse(data);

  return (
    <div className="container">
      {favoriteCities ? (
        <FavoritesList cities={favoriteCities} />
      ) : (
        <p>There is no content to show</p>
      )}
    </div>
  );
}
