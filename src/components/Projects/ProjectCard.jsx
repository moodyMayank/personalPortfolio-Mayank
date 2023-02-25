const ProjectCard = () => {
  return (
    <div className="w-[700px] bg-teal-300 mx-auto my-8 p-10 rounded-xl">
      <div className="flex items-center mb-5 rounded-lg bg-red-800 ">
        <img
          src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=1440"
          alt=""
        />
      </div>
      <h1>Web Dev Basics</h1>
      <p>
        Learn the basics Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Vero architecto culpa optio asperiores odit incidunt? Provident
        nam dignissimos in nihil et voluptatum deserunt quam unde.
      </p>
      <div>
        <button>Live Demo</button>
        <button>View Source</button>
      </div>
    </div>
  );
};

export default ProjectCard;
