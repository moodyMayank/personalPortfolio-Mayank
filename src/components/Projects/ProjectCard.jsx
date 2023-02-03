const ProjectCard = () => {
  return (
    <div className="flex items-center mb-5 rounded-lg bg-red-800 ">
      {/* Left  */}
      <div className="h-10 w-10">
        <img
          className="bg-blue-500"
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=1440"
          alt=""
        />
      </div>

      {/* Right */}
      <div>
        <h1>Project Heading</h1>
        <a href="">Live Project</a>
        <a href="">Source Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;
