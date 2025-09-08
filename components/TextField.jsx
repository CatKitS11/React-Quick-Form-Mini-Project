function TextField({ label, value, onChange, error, type = "text", placeholder }) {
    return (
      <div>
        <label className="block text-white font-medium mb-2">{label} <span className="text-red-400">*</span></label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full p-3 rounded-lg bg-gray-700 text-white border ${
            error ? "border-red-500" : "border-gray-600"
          } focus:border-blue-500 focus:outline-none`}
        />
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </div>
    );
  }
  
  export default TextField;