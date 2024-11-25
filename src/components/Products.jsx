import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react"; 
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";


const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 17);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} count={index} val={val} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.6 }}
          className="absolute h-[17rem] w-[26rem] bg-white left-1/3  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-200"
          >
            <video
              className="absolute object-cover "
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              className="absolute object-cover "
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-400"
          >
            <video
              className="absolute object-cover "
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.6 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="absolute object-cover "
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
