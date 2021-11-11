import React from "react";
import "../style/css/Experience.css";
import { Button } from "@material-ui/core";
import Card from "./Card";

function Experience() {
  return (
    <div className="experience">
      <div className="experience__header">
        <div className="experience__headerRight">
          <h1>Meet Online Experiences</h1>
          <div>
            <span>
              Interactive activities you can do together, led by expert hosts
            </span>
          </div>
        </div>
        <div className="experience__headerLeft">
          <Button varient="outlined">Explore</Button>
        </div>
      </div>
      <div className="experience__body">
        <Card
          src="https://images.unsplash.com/photo-1561954468-3dad0e328205?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          title="Learn to make soup in Shengai"
        />
        <Card
          src="https://images.unsplash.com/photo-1542772144-515ddfae17e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
          title="Explore feminism with street art anf grafitti"
        />
        <Card
          src="https://images.unsplash.com/photo-1591634619956-e64fd0fa3fac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          title="Craft cocktails and talk gender with bartender"
        />
      </div>
    </div>
  );
}

export default Experience;
