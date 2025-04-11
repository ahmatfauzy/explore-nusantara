import { motion } from "framer-motion";

const IndonesiaParadise = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
      {/* Background image with animation */}
      <motion.div
        className="absolute inset-0 bg-indigo-50 overflow-hidden"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <img
          src="/images/indonesia.svg"
          alt="Indonesia Map"
          className="h-full w-full object-cover opacity-20"
          style={{
            filter: "sepia(30%) hue-rotate(180deg)",
            minWidth: "100%",
            maxWidth: "100%",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              Discover{" "}
            </motion.span>
            <motion.span
              className="text-blue-600"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ amount: 0.3 }}
            >
              Earth’s Last Paradise
            </motion.span>
          </h1>

          <motion.p
            className="text-lg font-medium text-gray-600 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            Indonesia — Where emerald jungles meet crystal waters, and every
            island whispers tales of ancient wonders.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default IndonesiaParadise;
