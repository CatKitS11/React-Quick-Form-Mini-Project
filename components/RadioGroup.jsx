import { movies } from "../constants/movies.js";

function RadioButton({ selectedOption, setSelectedOption }) {
  return (
    <div className="space-y-2">
      {movies.map((movie, i) => (
        <label key={i} className="flex items-center text-white cursor-pointer">
          <input
            type="radio"
            name="movie"
            value={movie.title}
            checked={selectedOption === movie.title}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mr-3"
          />
          <span>{movie.title} ({movie.year})</span>
        </label>
      ))}
    </div>
  );
}

export default RadioButton;