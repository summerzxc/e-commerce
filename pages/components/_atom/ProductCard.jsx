import { useRouter } from "next/router";

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      className="w-full flex flex-col gap-4 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="bg-[#cdcdcd] w-full h-[240px] sm:h-[300px] rounded-[12px]"
        style={{
          backgroundImage: `url(${product.images[0]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <span>{product.name}</span>
    </div>
  );
}
