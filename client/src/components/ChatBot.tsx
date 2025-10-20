import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}


export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          type: "bot",
          content:
            "Halo! 👋 Saya adalah chatbot bantuan SMK Teknologi Nusantara. Saya dapat membantu Anda dengan informasi tentang:\n\n• Jadwal sekolah dan agenda\n• Program keahlian (Informatika & Robotika)\n• Data guru dan staf\n• Informasi nilai siswa\n• Profil sekolah\n• Berita dan pengumuman\n\nAda yang bisa saya bantu?",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Send request to local serverless proxy which keeps the API key on the server
      const systemPrompt = `Anda adalah chatbot bantuan untuk SMK Teknologi Nusantara, sebuah sekolah menengah kejuruan dengan program Teknik Informatika dan Robotika.\n\nInformasi sekolah:\n- Nama: SMK Teknologi Nusantara\n- Alamat: Jl. Teknologi No. 123, Jakarta Timur\n- Telepon: (021) 2345678\n- Email: info@smkteknologinusantara.sch.id\n- Program: Teknik Informatika dan Robotika\n- Kepala Sekolah: Drs. Ahmad Wijaya, M.Pd\n- Jumlah Siswa: 500+\n- Jumlah Guru: 40+\n\nVisi: Menjadi sekolah menengah kejuruan terkemuka yang menghasilkan lulusan berkompetensi tinggi di bidang teknologi.\n\nMisi:\n1. Menyelenggarakan pendidikan berkualitas di bidang teknologi\n2. Mengembangkan karakter siswa yang beriman dan bertakwa\n3. Mempersiapkan siswa untuk memasuki dunia kerja\n4. Membangun kemitraan strategis dengan industri\n\nJam operasional: Senin-Jumat 07:00-16:00, Sabtu 07:00-12:00\n\nJawab pertanyaan pengguna dengan ramah, informatif, dan sesuai dengan informasi sekolah di atas. Jika pertanyaan tidak terkait dengan sekolah, arahkan kembali ke topik sekolah.`;

      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `${systemPrompt}\n\nPertanyaan pengguna: ${inputValue}` }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Upstream error:', errText);
        throw new Error('API Error');
      }

      const data = await response.json();

      // Try to extract text from common Gemini / GL responses; fallback to generic message
      const botResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        data.output?.[0]?.content?.text ||
        data.choices?.[0]?.message?.content ||
        JSON.stringify(data).slice(0, 1000) ||
        'Maaf, saya tidak dapat memproses pertanyaan Anda saat ini. Silakan coba lagi atau hubungi admin sekolah.';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);

      // Fallback response when API is not available
      const fallbackResponses: { [key: string]: string } = {
        jadwal: "Jadwal sekolah kami adalah Senin-Jumat pukul 07:00-16:00 dan Sabtu pukul 07:00-12:00.",
        program:
          "SMK Teknologi Nusantara memiliki dua program keahlian: Teknik Informatika dan Robotika. Kedua program dirancang untuk mempersiapkan siswa memasuki dunia kerja.",
        guru: "Kami memiliki lebih dari 40 guru profesional dengan pengalaman industri dan sertifikasi internasional.",
        nilai:
          "Anda dapat melihat nilai siswa di halaman 'Nilai Siswa' dengan login menggunakan NIS dan password Anda.",
        alamat: "Alamat sekolah kami: Jl. Teknologi No. 123, Jakarta Timur 13210, Indonesia.",
        kontak: "Hubungi kami di (021) 2345678 atau email info@smkteknologinusantara.sch.id",
        profil: "SMK Teknologi Nusantara adalah sekolah menengah kejuruan terkemuka dengan fokus pada teknologi informatika dan robotika.",
      };

      let response = fallbackResponses["default"] || "Terima kasih atas pertanyaannya! Silakan hubungi admin sekolah untuk informasi lebih lanjut.";

      const lowerInput = inputValue.toLowerCase();
      for (const [key, value] of Object.entries(fallbackResponses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
        title="Chat dengan kami"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 bg-white rounded-lg shadow-2xl flex flex-col max-h-96 md:max-h-[500px]">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Chat Bantuan</h3>
            <p className="text-sm text-blue-100">SMK Teknologi Nusantara</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Sedang mengetik...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t p-4 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ketik pertanyaan Anda..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

