import React from "react";
import Title from "./Title";
import { ServicesLinks } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services " />
      <div className="section-center services-center">
        {ServicesLinks.map((s) => {
          return (
            <article className="service" key={s.id}>
              <span className="service-icon">
                <i className={s.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{s.title}</h4>
                <p className="service-text">{s.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
