import React from 'react'

export default function AboutBottomImg() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2">
        <div className="flex flex-col gap-10">
          <div
            className="w-full h-[80vh] bg-[#cdcdcd] rounded-[12px] grayscale-bg-hover"
            style={{
              backgroundImage: "url('/images/about-4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p className="pr-4">
            Our commitment extends beyond sales; we strive to build lasting
            relationships with our customers. Enjoy personalized
            recommendations, exclusive promotions, and events tailored just for
            you. We're more than a retailer; we're a community of discerning
            individuals who appreciate the artistry behind Chrome Hearts
            creations.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div
            className="w-full h-[80vh] bg-[#cdcdcd] rounded-[12px] grayscale-bg-hover"
            style={{
              backgroundImage: "url('/images/about-5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <p className="pr-4">
            Join us today and experience the difference. Discover genuine
            craftsmanship, personalized service, and a community that shares
            your passion for distinctive style. At soleil, luxury is not just a
            purchase; it's an experience to be cherished.
          </p>
        </div>
      </div>
  )
}
