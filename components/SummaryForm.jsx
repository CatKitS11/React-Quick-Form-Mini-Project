function SurveySummary({ name, email, favoriteMovie, comments, onReset }) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
          <h2 className="text-white text-3xl font-bold text-center mb-8">ขอบคุณ!</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">ชื่อ</p>
              <p className="text-white font-medium">{name}</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">อีเมล</p>
              <p className="text-white font-medium">{email}</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">หนังที่ชอบ</p>
              <p className="text-white font-medium">{favoriteMovie}</p>
            </div>
            
            {comments && (
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">ความคิดเห็น</p>
                <p className="text-white font-medium">{comments}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={onReset}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              ส่งใหม่
            </button>
            
            <button 
              onClick={() => {
                if (confirm('คุณต้องการล้างข้อมูลทั้งหมดหรือไม่?')) {
                  onReset();
                }
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              ล้างข้อมูล
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default SurveySummary;