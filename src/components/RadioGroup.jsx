import { useState } from "react";
import { movies } from "../constants/movies.js";

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [comment, setComment] = useState("");
  console.log(selectedOption);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <form className="flex flex-col items-start m-3">
        {movies.map((movie, i) => (
          <label key={i} className="flex gap-2">
            <input
              className="m-2"
              type="radio"
              name="option"
              value={movie.title}
              checked={selectedOption === movie.title}
              onChange={handleChange}
            />
            {movie.title}
          </label>
        ))}
      </form>
      {selectedOption && <p>Selected: {selectedOption || "None"}</p>}
      {selectedOption && <p>Year: {movies.filter(movie => movie.title === selectedOption)[0].year || "None"} Director: {movies.filter(movie => movie.title === selectedOption)[0].director || "None"}</p>}
      {selectedOption && (
        <label className="mt-3 w-full">
          <textarea
            className="mt-1 w-full p-2 border rounded"
            placeholder={`แสดงความคิดเห็นเกี่ยวกับ ${selectedOption}...`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
      )}
    </div>
  );
}

export default RadioButton;