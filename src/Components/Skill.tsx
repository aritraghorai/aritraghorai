const Skill = ({ name, icon }: { name: string; icon: string }) => (
  <div className="shadow-sm shadow-black dark:shadow-[#040c16] hover:scale-110 duration-500">
    <img className="w-20 pt-5 mx-auto" src={icon} alt="Html Icon" />
    <p className="my-4">{name}</p>
  </div>
);
export default Skill;
