import { useState } from "react";
import { validateForm } from "../utils/validation";
import TextField from "./TextField";
import RadioButton from "./RadioGroup";
import SurveySummary from "./SummaryForm";

function SurveyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [comments, setComments] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [favoriteMovieError, setFavoriteMovieError] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(name, favoriteMovie, email, setNameError, setFavoriteMovieError, setEmailError)) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setFavoriteMovie("");
    setComments("");
    setIsSubmitted(false);
    setNameError("");
    setEmailError("");
    setFavoriteMovieError("");
  };

  if (isSubmitted) {
    return (
      <SurveySummary
        name={name}
        email={email}
        favoriteMovie={favoriteMovie}
        comments={comments}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h1 className="text-white text-3xl font-bold text-center mb-8">Movie Survey</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            label="ชื่อ"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            placeholder="กรอกชื่อของคุณ"
          />

          <TextField
            label="อีเมล"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            placeholder="กรอกอีเมลของคุณ"
          />

          <div>
            <label className="block text-white font-medium mb-3">
              หนังที่ชอบ <span className="text-red-400">*</span>
            </label>
            <div className="bg-gray-200 p-4 rounded-lg">
              <RadioButton 
                selectedOption={favoriteMovie}
                setSelectedOption={setFavoriteMovie}
              />
            </div>
            {favoriteMovieError && (
              <p className="text-red-400 text-sm mt-1">{favoriteMovieError}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              ความคิดเห็น <span className="text-gray-400 text-sm">(ไม่บังคับ)</span>
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="แสดงความคิดเห็น..."
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none h-24 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            ส่งข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
}

export default SurveyForm;