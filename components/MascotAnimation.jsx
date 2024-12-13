"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MascotAnimation() {
  const containerRef = useRef(null);
  const owlRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const owl = owlRef.current;

    if (!container || !owl) return;

    // Set initial rotation of the owl  
    gsap.set(owl, { rotation: -30 }); 

    // Create a timeline to control owl animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
      },
    });

    // First, animate owl translation on the x-axis
    tl.to(owl, {
      x: -170,
      duration: 1,
      ease: "power1.inOut",
    });

    // Then straighten the owl by adjusting the rotation
    tl.to(owl, {
      rotation: 0,
      duration: 1, // Duration for the rotation change
      ease: "power1.inOut",
    });

    // Animate owl movement on y-axis separately
    tl.to(owl, {
      y: 400,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    // Message opacity animation
    tl.from("#container #message", {
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  }, []);

  return (
    <div className="mt-28 overflow-hidden">
      <div ref={containerRef} id="container" className="w-full h-[200vh] relative">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam, repellat sapiente labore perspiciatis sint. Et ad ratione magni dolores, accusamus, debitis quisquam voluptas sequi adipisci suscipit temporibus nisi dolore?</p> */}
        
        <div ref={owlRef} className="fixed top-14 -right-16 z-50" id="owl">
          <div id="message" className="absolute right-20 -top-5 hidden">
            {/* <img src="message.png" className="w-20" alt="Message" /> */}
          </div>
          <img
            className="w-36"
            src="/edugo.gif"
            alt="Owl"
          />
        </div>
      </div>
    </div>
    
  );
}
