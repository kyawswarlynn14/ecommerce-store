
import Link from "next/link";
import { AiFillFacebook, AiFillPhone } from "react-icons/ai";
import { FaTelegram, FaViber } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Footer = () => {
    return (
      <footer id="contact" className=" border-t-2 rounded-tl-3xl">
        <div className=" my-4 py-2 px-10 md:w-[50%] mx-auto md:border border-teal-300 rounded-lg">
          <p className="text-3xl font-serif tracking-widest text-center pb-4">
            Contact Us
          </p>

          <Link
            href="https://maps.app.goo.gl/PCctunn537MLyMpy8"
            className="text-white no-underline"
          >
            <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-4 hover:underline underline-offset-4">
              <GoLocation className="text-2xl text-yellow-400" />

              <p>63(B), 20x21ကြား၊ အောင်မြေသာစံမြို့နယ်၊ မန္တလေးမြို့။</p>
            </div>
          </Link>

          <Link
          href="https://www.facebook.com/profile.php?id=100064007971916&mibextid=ZbWKwL"
          className="text-white no-underline"
        >
          <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-4 hover:underline underline-offset-2">
            <AiFillFacebook className="text-2xl text-blue-600" />

            <p>ပလောင်မင်းသား</p>
          </div>
        </Link>

        <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-4">
          <AiFillPhone className="text-2xl text-yellow-400" />

          <p className="md:hidden">
            09-259384035, <br /> 09-753748700
          </p>

          <p className="hidden md:block">09-259384035, 09-753748700</p>
        </div>

        <Link href="https://t.me/Jerryang7" className="text-white no-underline">
          <div className="flex border-b-2 border-dashed cursor-pointer gap-4 md:text-lg pb-4 mb-4 hover:underline underline-offset-4">
            <FaViber className="text-2xl text-purple-700" />
            <FaTelegram className="text-2xl text-blue-500" />
            <p>Jerryang , 09-753748700</p>
          </div>
        </Link>
        </div>
      </footer>
    )
};

export default Footer;