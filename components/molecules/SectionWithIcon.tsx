function SectionWithIcon({ title, children }) {
  return (
    <div className="flex">
      <div className=" flex flex-col justify-center">{children}</div>
      <h3 className="text-4xl   border-black pl-4 font-light">{title}</h3>
    </div>
  );
}

export default SectionWithIcon;
