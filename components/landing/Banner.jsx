import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../Icon'; // Icon bileşeninin dosya yolunu doğru belirtin

const Banner = () => {
  return (
    <div className='flex items-center justify-between md:gap-10 mt-36 mb-24 md:mt-48'>
      <div className='flex flex-col items-start justify-center gap-6 md:w-1/2'>
        <motion.h1
          className='text-2xl md:text-5xl text-neutral-50 uppercase font-semibold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Turkish Developers
        </motion.h1>

        <motion.p
          className='text-sm md:text-base font-medium text-neutral-300'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          Turkish Developers'a hoş geldiniz! Tutkulu yazılım geliştiriciler ve yetenekli tasarımcılardan oluşan canlı ve sürekli büyüyen topluluğumuza katılın. Benzer düşünen bireylerle bağlantı kurun, bilginizi paylaşın.
        </motion.p>

        <motion.a
          href='https://discord.gg/ygrZVrhFvX'
          target='_blank'
          className="text-sm cursor-pointer md:text-base inline-flex relative items-center md:px-6 px-4 py-3 border border-red-500 bg-red-900 text-red-500 bg-opacity-30 font-medium rounded-lg shadow-md hover:bg-red-900 hover:text-white uppercase transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          Discord
        </motion.a>
      </div>

      <div className='relative hidden md:flex w-1/2 h-96 bg-neutral-9 border border-neutral-700 00 bg-opacity-70 overflow-hidden rounded-lg'>
        <div className='absolute top-2 right-2 flex gap-2'>
          <div className='p-1 w-3 h-3 bg-red-500 rounded-full'>
          </div>
          <div className='p-1 w-3 h-3 bg-green-500 rounded-full'>
          </div>
        </div>

        <div className='flex flex-col items-start gap-[1px] text-white p-2'>
          {[...Array(30)].map((_, index) => (
            <div key={index} className='text-neutral-500 text-xs'>{index + 1}</div>
          ))}
        </div>

        <div className='text-white text-xs md:text-sm p-2'>
          <pre className="rounded-lg shadow-lg">
            <code className="text-red-200">
              {`#include <iostream>
using namespace std;

int main() {
    cout << "Turkish Developers'a hos geldiniz!" << endl;
    cout << "Bu topluluk," << endl;
    cout << "yazilim gelistiriciler ve" << endl;
    cout << "tasarimcilardan olusan" << endl;
    cout << "dinamik ve buyuyen" << endl;
    cout << "bir topluluktur." << endl;
    cout << "Burada" << endl;
    cout << "birbirimizden ogreniyor," << endl;
    cout << "birlikte gelisiyoruz." << endl;
    cout << "Haydi, yeni projeler" << endl;
    cout << "kesfetmeye ve" << endl;
    cout << "birlikte uretmeye baslayalim!" << endl;
    return 0;
}

`}
            </code>
          </pre>
        </div>

      </div>

    </div>
  );
}

export default Banner;
