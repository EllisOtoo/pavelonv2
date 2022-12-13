const Button = ({ title }: { title: string }) => {
  return (
    <button
      onClick={() => {
        console.log("Clicked");
      }}
      className="bg-gray-800 py-2 px-4 text-white w-8/12 md:w-3/12 rounded-lg hover:bg-sky-600
"
    >
      {title}
    </button>
  );
};

export default Button;
