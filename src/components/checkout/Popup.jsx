import React, { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import gsap from "gsap";
import { Link, } from "react-router-dom";


const OrderSuccessPopup = ({ isOpen }) => {
  const popupRef = useRef();
  const iconRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!isOpen) return;



    gsap.fromTo(
      popupRef.current,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    gsap.fromTo(
      iconRef.current,
      {
        scale: 0,
        rotation: -180,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1,0.5)",
      }
    );

    gsap.fromTo(
      particlesRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
      }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={popupRef}
        className="relative w-70 h-90 md:w-105 rounded-xl bg-white p-8 shadow-2xl"
      >
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute h-2 w-2 rounded-full bg-[#7c3aed]"
            style={{
              top: `${Math.random() * 90}px`,
              left: `${Math.random() * 280 + 30}px`,
            }}
          />
        ))}

        <div
          ref={iconRef}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#7c3aed] shadow-lg"
        >
          <FaCheck className="text-4xl text-white" />
        </div>

        <h2 className="mt-6 text-center text-2xl font-bold">
          Thank You For Ordering!
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Your order has been placed successfully.
        </p>

        <div className="mt-8 flex gap-2 items-center justify-center">
          <button className="md:flex rounded border text-sm md:py-3 md:px-5 font-medium hidden">
            VIEW ORDER
          </button>

          <Link to='/products'
            className="flex items-center text-sm justify-center rounded bg-[#7c3aed] py-3 px-5 font-medium text-white">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPopup;