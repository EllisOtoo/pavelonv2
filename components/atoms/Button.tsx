import Link from "next/link";

const Button = ({ title }: { title: string }) => {
  return (
    <Link href={"/contact"}>
      {" "}
      <button
        onClick={() => {
          console.log("Clicked");
        }}
        className="bg-gray-800 py-2 px-4 text-white w-8/12 md:w-6/12 rounded-lg hover:bg-sky-600
"
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
