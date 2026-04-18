'use client';
import { BsArrowUp } from "react-icons/bs";
console.log(`

 ██████     ██▓    ███▄ ▄███▓    ▄▄▄          ███▄    █    ▄▄▄█████▓    ▄▄▄      
▒██    ▒    ▓██▒   ▓██▒▀█▀ ██▒   ▒████▄        ██ ▀█   █    ▓  ██▒ ▓▒   ▒████▄    
░ ▓██▄      ▒██▒   ▓██    ▓██░   ▒██  ▀█▄     ▓██  ▀█ ██▒   ▒ ▓██░ ▒░   ▒██  ▀█▄  
  ▒   ██▒   ░██░   ▒██    ▒██    ░██▄▄▄▄██    ▓██▒  ▐▌██▒   ░ ▓██▓ ░    ░██▄▄▄▄██ 
▒██████▒▒   ░██░   ▒██▒   ░██▒    ▓█   ▓██▒   ▒██░   ▓██░     ▒██▒ ░     ▓█   ▓██▒
▒ ▒▓▒ ▒ ░   ░▓     ░ ▒░   ░  ░    ▒▒   ▓▒█░   ░ ▒░   ▒ ▒      ▒ ░░       ▒▒   ▓▒█░
░ ░▒  ░ ░    ▒ ░   ░  ░      ░     ▒   ▒▒ ░   ░ ░░   ░ ▒░       ░         ▒   ▒▒ ░
░  ░  ░      ▒ ░   ░      ░        ░   ▒         ░   ░ ░      ░           ░   ▒   
      ░      ░            ░            ░  ░            ░                      ░  ░
                                                                                  
`)

const Footer: React.FC = () => {
  const backToTop = (): void => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="mystyle  mx-auto p-10 h-full cursor-pointer">
        <BsArrowUp
          onClick={() => {
            backToTop();
          }}
          className="w-10 h-10 mystyle p-2 animate-bounce mx-auto"
        />
      <div className="text-center">
      
        <p className="font-bold text-xl md:text-4xl my-2 md:my-4 text-gray-400">
          Designed and Developed by Simanta
        </p>
        <p className="font-semibold my-2">
          Simanta Barua, {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
