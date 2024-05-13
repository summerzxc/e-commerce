import React from "react";
import FeatureCard from "../_atom/FeatureCard";

export default function Features() {
  return (
    <div className="w-full flex flex-wrap lg:grid lg:grid-cols-3 gap-2">
      <FeatureCard
        label="Comfort"
        number="1"
        text="We understand the importance of a shopping exp,  designed our website to be intuitive to navigate."
        image="features_1.jpeg"
      />
      <FeatureCard
        label="Quality"
        number="2"
        text="From materials to construction, we pay attention to every detail to deliver products that stand the test of time."
        image="features_2.webp"
      />
      <FeatureCard
        label="Sustainability"
        number="3"
        text="When you shop with us, you're not just purchasing products – you're making a choice for sustainability."
        image="features_3.webp"
      />
    </div>
  );
}
