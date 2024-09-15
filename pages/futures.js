import React from 'react';
import { motion } from 'framer-motion';

function Futures() {
  const features = [
    { title: 'Kişisel blog sayfaları', description: 'Topluluğumuzda ki herkesin kendine ait blog sayfaları olacak.' },
    { title: 'Tartışma alanı', description: 'Topluluğumuzda ki tartışma alanında insanlar birbirine sorular sorup tartışabilecekler.' },
    { title: 'Etkinlik Takvimi', description: 'Düzenli olarak düzenlenen etkinliklerimizin takibini buradan yapabilmenizi istiyoruz.' },
    { title: 'Dil desteği', description: "8'den fazla dil desteği ile bu ismi global olarak duyurmak istiyoruz." },
    { title: 'Mobil Uyumluluk', description: 'Tüm cihazlarda optimize edilmiş görünüm ile herkesin ceplerinde ki telefonlardan etkileşimde olmalarını istiyoruz.' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-start md:items-center py-24 px-6">
      <h1 className="text-4xl font-bold mb-8 md:mb-16 text-neutral-200">Çok yakında</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-default">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, translateY: -10, opacity: 1 }}
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-950 bg-opacity-30 border border-neutral-700 rounded-lg shadow-lg p-6 max-w-sm text-left"
          >
            <h2 className="text-2xl text-neutral-100 font-semibold mb-2">{feature.title}</h2>
            <p className="text-neutral-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Futures;
