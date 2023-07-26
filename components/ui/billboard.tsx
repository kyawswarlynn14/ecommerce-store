import { Billboard } from "@/types";
import Image from "next/image";
import logo from '../../app/logo1.jpg'

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden relative ">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="h-80 md:h-96 w-auto rounded-xl relative  overflow-hidden bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 absolute top-0 ">
          <Image src={logo} alt="logo" className="h-20 w-20 md:h-40 md:w-40 rounded-full mr-10" />
          <div className="font-bold text-[#00FF00] text-4xl lg:text-6xl sm:max-w-xl max-w-xs pr-10">
            {data.label}
          </div>
          <p className="hidden md:block text-white pl-2 pr-10 text-xl font-bold">
            သဘာဝစစ်စစ် ရဲ့ အရသာ နမ့်ဆန် တအောင်း (ပလောင်)‌ ဒေသထွက် အဆင့်မြင့် လက်ဖက်ခြောက်
          </p>

          <p className="block md:hidden text-white pl-2 pr-10 text-xl font-bold">
            သဘာဝစစ်စစ်ရဲ့ အရသာ <br /> နမ့်ဆန် တအောင်း (ပလောင်)‌ ဒေသထွက် <br /> အဆင့်မြင့် လက်ဖက်ခြောက်
          </p>
      </div>
    </div>
   );
};

export default Billboard;