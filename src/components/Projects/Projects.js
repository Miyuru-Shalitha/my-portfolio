import React from "react";
import Project from "./Project";
import cardImage from "../../assets/images/quiz-app.PNG";
import todoListCalender from "../../assets/images/todo-list-calender.PNG";
import pomodoroTimer from "../../assets/images/pomodoro-timer.PNG";

function Projects() {
  return (
    <section id="projects" className="projects u-margin-top-medium">
      <div className="projects__heading">
        <h2 className="heading-secondary">Projects</h2>
      </div>

      <div className="projects__container u-margin-top-medium">
        <Project
          imageUrl={cardImage}
          title="Quiz App"
          description="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
            dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur"
          demoLink="https://random-quiz-web-app.netlify.app"
          githubLink="https://github.com/Miyuru-Shalitha/quiz-app.git"
        />

        <Project
          imageUrl={todoListCalender}
          title="todo-list calender"
          description="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
            dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur"
          demoLink="https://todolist-calendar.netlify.app"
          githubLink="https://github.com/Miyuru-Shalitha/Todo-List.git"
        />

        <Project
          imageUrl={pomodoroTimer}
          title="Pomodoro Timer"
          description="lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum
            dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
            consectetur"
          demoLink="https://mini-pomodoro-timer.netlify.app"
          githubLink="https://github.com/Miyuru-Shalitha/pomodoro-timer.git"
        />
      </div>
    </section>
  );
}

export default Projects;
