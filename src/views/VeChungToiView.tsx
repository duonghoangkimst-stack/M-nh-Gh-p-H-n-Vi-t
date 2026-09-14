import { TabType } from '../types';

interface VeChungToiViewProps {
  setActiveTab: (tab: TabType) => void;
}

export default function VeChungToiView({ setActiveTab }: VeChungToiViewProps) {
  return (
    <div className="w-full flex-grow bg-[#FDFBF7]">
      {/* Hero Banner */}
      <section className="relative h-[360px] md:h-[440px] flex items-center justify-center overflow-hidden border-b border-[#C5B358] bg-[#570000]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida/AEtjO1XAr_s4fEmYDAsu5CaHm9qWIzBR20XpYN1Hxb3ZOlXxEjcd9Bg19K68YE97pIrbo8nTOL0sNMEEE9lW3lG-yjlxQTdO_uP0zoPsqgEmvvcDFcYBMnkXFb5RjfXtkfO9W-MxiCFSE1vXsZimpIbQxAzOxkLEURQthQmHDXS-aUYIhezYImfs4wGPwJy1h4X5Eypeh_N1NQMQzPB_nTT-m7l3ugaIFookKNTzqCHZrn4YpLad7YY038_W5Sfc')"
          }}
        ></div>
        <div className="absolute inset-0 bg-[#570000]/90"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="text-xs bg-[#C5B358] text-[#570000] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-4">
            GIỚI THIỆU DỰ ÁN
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#D4AF37] uppercase tracking-widest mb-4 font-bold drop-shadow-md">
            VỀ CHÚNG TÔI
          </h1>
          <p className="font-serif italic text-lg text-[#F4EBD0]/90 max-w-2xl mx-auto">
            "Chúng tôi tin rằng lịch sử không nằm yên trong sách cũ, mà đang đập từng nhịp trong trái tim người trẻ."
          </p>
        </div>
      </section>

      {/* 01. Câu chuyện thương hiệu */}
      <section className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#570000] text-[#D4AF37] border-2 border-[#C5B358] flex items-center justify-center font-serif font-black text-base sm:text-lg md:text-xl shrink-0 shadow-sm leading-none">
                01
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#570000] uppercase leading-tight m-0">
                Câu Chuyện Thương Hiệu
              </h2>
            </div>

            <div className="my-6 text-center">
              <p
                className="font-serif italic font-bold text-lg md:text-xl text-[#570000] leading-relaxed"
                style={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}
              >
                “Máu đào tô thắm giang sơn,
                <br />
                Trang thư ngàn trước có còn vọng âm?”
              </p>
            </div>

            <p className="font-sans text-[#5A413D] text-sm md:text-base leading-relaxed text-justify">
              Lời nhắn nhủ của tiền nhân chưa bao giờ khép lại sau lớp bụi thời gian. Những trang sử dựng nước và giữ cõi vẫn ngày đêm âm vang, hòa cùng nhịp đập tự hào của thế hệ trẻ hôm nay.
            </p>

            <p className="font-sans text-[#5A413D] text-sm md:text-base leading-relaxed text-justify">
              Với sứ mệnh đánh thức hồn thiêng lịch sử qua công nghệ số, Mảnh Ghép Hồn Việt tạo nên một không gian nhập vai và tương tác - nơi người trẻ không chỉ đứng ngoài quan sát dĩ vãng, mà được trực tiếp bước vào, khám phá và chạm tới những câu chuyện hào hùng của dân tộc.
            </p>

            <p className="font-sans text-[#5A413D] text-sm md:text-base leading-relaxed text-justify">
              Mỗi địa danh, mỗi câu chuyện, mỗi trải nghiệm là một mảnh ghép ký ức được kết nối trọn vẹn với hiện tại - để lịch sử không chỉ dừng lại ở trang sách, mà thực sự sống lại đầy gần gũi, sống động trong từng nhịp thở đương đại.
            </p>

            {/* Slogan Banner */}
            <div
              className="mt-6 flex items-center justify-center bg-[#FFE9E6]/60 border border-[#570000]/20 rounded-xl shadow-xs"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 24px'
              }}
            >
              <p
                className="font-serif italic font-semibold text-sm md:text-base text-[#570000] text-center m-0"
                style={{
                  lineHeight: 1.2,
                  margin: 0,
                  textAlign: 'center'
                }}
              >
                “Một chạm kết nối quá khứ - Lan tỏa niềm tự hào non sông”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border-2 border-[#C5B358] shadow-lg aspect-square">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtO_hbFEr-JkZkT49MlzGT7M_Bn-VxkzjvKArTnUNR9KDS2gNUWrUJXgV9umFD6YraQaz4j2a5t5UbJEIMuz036OP4i5ghK-lZmnjj__HfFkjR5aiYKqTqfgN-6s6n4lsQ2cQB-4xod1IKpqtILs_9KhhsWurKDUUsZt3ISu0O3MHZtQFIRrM6LIoIGr-fbfYJ3g-i_lmBsAll-kmvGasdrBeVxd5-RCVVXjY0dD5jlNhjfEZqrX7MFv7uy-Y3rnYZ6G8"
                alt="Di sản Việt Nam"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-[#C5B358] shadow-lg aspect-square mt-8">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1W1lXiH1jb02EBeKt7-c0jAjPEqsyH-m_0_hpdErAwfMFYAjwHKM8CObyJBxACiHRWo75TEPzYTKq04W8zZG94RabyLpJGJanxq5_ckPhAGny3_1ElSvoG_97xlb5nO7NfCce0u07cnpa20mRaWYlfqaNWVk-mFH7e3JWqjzUnLksJ0_ciDGkChg3Up-9Nc2PYA_w5W-kzjby_Mik9z_t7-OXyH-ZoFXzqdGuv880DmqWlENVjFCTbMt2I"
                alt="Mảnh ghép bản đồ"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02. Sứ mệnh & Giá trị cốt lõi */}
      <section className="bg-[#570000] text-white py-20 border-y-4 border-[#C5B358]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#D4AF37] text-[#570000] border-2 border-[#F4EBD0] flex items-center justify-center font-serif font-black text-base sm:text-lg md:text-xl shrink-0 shadow-md leading-none">
                02
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] uppercase leading-tight m-0">
                Sứ Mệnh & Giá Trị Cốt Lõi
              </h2>
            </div>
            <p className="font-sans text-[#F4EBD0]/80 text-sm">
              3 trụ cột định hình mọi bước đi của Mảnh Ghép Hồn Việt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-[#C5B358]/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#570000] flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#D4AF37] mb-3 uppercase">
                Tôn Trọng Sự Thật
              </h3>
              <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                Tất cả tư liệu, câu chuyện và sự kiện trong trò chơi đều được tìm hiểu và nghiên cứu từ các trang lịch sử uy tín và các bảo tàng quốc gia.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-[#C5B358]/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#570000] flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-3xl">devices</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#D4AF37] mb-3 uppercase">
                Công Nghệ Vì Di Sản
              </h3>
              <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                Ứng dụng chip NFC, tương tác website và đồ họa cổ điển để xóa nhòa khoảng cách thời gian, biến việc học sử thành hành trình khám phá cuốn hút.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-[#C5B358]/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-[#570000] flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#D4AF37] mb-3 uppercase">
                Kết Nối Thế Hệ
              </h3>
              <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                Tạo cầu nối giữa ký ức của cha ông với góc nhìn tươi mới của người trẻ, cùng nhau viết tiếp trang sử xanh của non sông Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Hành trình phát triển */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#570000] text-[#D4AF37] border-2 border-[#C5B358] flex items-center justify-center font-serif font-black text-base sm:text-lg md:text-xl shrink-0 shadow-sm leading-none">
              03
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#570000] uppercase tracking-wider leading-tight m-0">
              HÀNH TRÌNH PHÁT TRIỂN
            </h2>
          </div>
          <p className="font-sans text-[#5A413D] text-sm md:text-base max-w-xl mx-auto">
            Từ ngọn lửa trăn trở của những sinh viên trẻ đến nền tảng kết nối di sản lịch sử Việt Nam
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#C5B358]/20 via-[#C5B358] to-[#C5B358]/20 z-0"></div>

          {/* 6 Milestones Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {/* Mốc 1 */}
            <div className="flex flex-col items-center text-center group bg-[#FFF8F6] lg:bg-transparent p-5 lg:p-2 rounded-2xl border lg:border-none border-[#C5B358]/40 shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E9] border-2 border-[#C5B358] flex items-center justify-center shadow-md group-hover:bg-[#FFE9E6] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#570000]">
                    lightbulb
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#570000] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center border border-[#C5B358] shadow-xs">
                  01
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#570000] mb-2 leading-snug">
                Trăn trở
              </h3>
              <p className="font-sans text-xs text-[#5A413D] leading-relaxed text-center">
                Làm sao để lịch sử không còn khô khan, mà trở nên gần gũi và chạm đến trái tim người trẻ?
              </p>
            </div>

            {/* Mốc 2 */}
            <div className="flex flex-col items-center text-center group bg-[#FFF8F6] lg:bg-transparent p-5 lg:p-2 rounded-2xl border lg:border-none border-[#C5B358]/40 shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E9] border-2 border-[#C5B358] flex items-center justify-center shadow-md group-hover:bg-[#FFE9E6] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#570000]">
                    groups
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#570000] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center border border-[#C5B358] shadow-xs">
                  02
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#570000] mb-2 leading-snug">
                9 cô gái trẻ
              </h3>
              <p className="font-sans text-xs text-[#5A413D] leading-relaxed text-center">
                9 sinh viên năm 2 ngành Thương mại điện tử cùng chung tình yêu lịch sử và công nghệ.
              </p>
            </div>

            {/* Mốc 3 */}
            <div className="flex flex-col items-center text-center group bg-[#FFF8F6] lg:bg-transparent p-5 lg:p-2 rounded-2xl border lg:border-none border-[#C5B358]/40 shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E9] border-2 border-[#C5B358] flex items-center justify-center shadow-md group-hover:bg-[#FFE9E6] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#570000]">
                    school
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#570000] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center border border-[#C5B358] shadow-xs">
                  03
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#570000] mb-2 leading-snug">
                Dự án Digital Marketing
              </h3>
              <p className="font-sans text-xs text-[#5A413D] leading-relaxed text-center">
                Bắt đầu từ một dự án học tập, nuôi dưỡng ước mơ tạo ra giá trị thật cho cộng đồng.
              </p>
            </div>

            {/* Mốc 4 */}
            <div className="flex flex-col items-center text-center group bg-[#FFF8F6] lg:bg-transparent p-5 lg:p-2 rounded-2xl border lg:border-none border-[#C5B358]/40 shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E9] border-2 border-[#C5B358] flex items-center justify-center shadow-md group-hover:bg-[#FFE9E6] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#570000]">
                    extension
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#570000] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center border border-[#C5B358] shadow-xs">
                  04
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#570000] mb-2 leading-snug">
                Hình thành Mảnh Ghép Hồn Việt
              </h3>
              <p className="font-sans text-xs text-[#5A413D] leading-relaxed text-center">
                Ý tưởng dần hoàn thiện, trở thành nền tảng kết nối lịch sử, công nghệ và cảm xúc.
              </p>
            </div>

            {/* Mốc 5 */}
            <div className="flex flex-col items-center text-center group bg-[#FFF8F6] lg:bg-transparent p-5 lg:p-2 rounded-2xl border lg:border-none border-[#C5B358]/40 shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E9] border-2 border-[#C5B358] flex items-center justify-center shadow-md group-hover:bg-[#FFE9E6] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#570000]">
                    public
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#570000] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center border border-[#C5B358] shadow-xs">
                  05
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#570000] mb-2 leading-snug">
                Số hóa & Tái hiện di sản
              </h3>
              <p className="font-sans text-xs text-[#5A413D] leading-relaxed text-center">
                Số hóa, tái hiện các di tích, câu chuyện lịch sử dưới hình thức nhập vai và tương tác.
              </p>
            </div>

            {/* Mốc 6 */}
            <div className="flex flex-col items-center text-center group bg-[#FFF8F6] lg:bg-transparent p-5 lg:p-2 rounded-2xl border lg:border-none border-[#C5B358]/40 shadow-xs lg:shadow-none hover:-translate-y-1 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF6E9] border-2 border-[#C5B358] flex items-center justify-center shadow-md group-hover:bg-[#FFE9E6] transition-colors">
                  <span className="material-symbols-outlined text-3xl text-[#570000]">
                    handshake
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#570000] text-[#D4AF37] text-[10px] font-bold flex items-center justify-center border border-[#C5B358] shadow-xs">
                  06
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#570000] mb-2 leading-snug">
                Kết nối người trẻ với lịch sử
              </h3>
              <p className="font-sans text-xs text-[#5A413D] leading-relaxed text-center">
                Trở thành cầu nối giúp thế hệ trẻ hiểu, yêu và tự hào về di sản Việt Nam một cách mới mẻ.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              setActiveTab('trochoi');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#570000] hover:bg-[#800000] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Trải nghiệm Trò chơi</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('lienhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-[#570000] text-[#570000] hover:bg-[#570000] hover:text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Liên hệ hợp tác</span>
          </button>
        </div>
      </section>
    </div>
  );
}
