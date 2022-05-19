import useAxios from "./useAxios";

export default function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.torrentbay.to/api/v2/movie_details.json",
  });

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch Button</button>
    </div>
  );
}
