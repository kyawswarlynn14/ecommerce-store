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
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden ">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="h-80 md:h-96 w-auto rounded-xl relative  overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <Image src={logo} alt="logo" className="h-20 w-20 md:h-40 md:w-40 rounded-full" />
          <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
          <p className="text-white text-lg md:text-2xl font-bold">
            သဘာဝစစ်စစ်ရဲ့ အရသာ နမ့်ဆန်တအောင်း(ပလောင်)‌ဒေသထွက် အဆင့်မြင့် လက်ဖက်ခြောက်
          </p>
        </div>
      </div>
    </div>
   );
};

export default Billboard;