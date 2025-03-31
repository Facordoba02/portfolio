import React from "react";
import projects from "../../utils/Projects";
import { Card } from "../Card/Card";

export const Main = () => {
  return (
    <main className="main">
      <section className="main__cards" id="projects">
        {
          projects.map((p,i)=>(
            <Card key={i} data={p}/>
          ))
        }
      </section>
    </main>
  );
};
