const LoadMoreBtn = ({ setPage }) => {
  return (
    <div>
      <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
    </div>
  );
};

export default LoadMoreBtn;
