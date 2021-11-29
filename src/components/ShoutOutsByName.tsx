import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShoutOut from "../models/ShoutOut";
import {
  addShoutOut,
  deleteShoutOut,
  getShoutOutsByName,
} from "../services/ShoutOutService";
import AddShoutOutForm from "./AddShoutOutForm";
import "./ShoutOutsByName.css";
import ShoutOutsList from "./ShoutOutsList";

interface RouteParams {
  name: string;
}

const ShoutOutsByName = () => {
  const { name } = useParams<RouteParams>();
  // const name= useParams<RouteParams>().name; <-- could also be this
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

  useEffect(() => {
    getShoutOutsByNameHandler(name);
  }, [name]);

  const getShoutOutsByNameHandler = (name: string): void => {
    getShoutOutsByName(name).then((response) => {
      console.log(response);
      setShoutOuts(response);
    });
  };

  const addShoutOutHandler = (shoutOut: ShoutOut): void => {
    addShoutOut(shoutOut).then((response) => getShoutOutsByNameHandler(name));
  };

  const deleteShoutOutHandler = (id: string): void => {
    deleteShoutOut(id).then(() => {
      getShoutOutsByNameHandler(name);
    });
  };

  return (
    <div className="ShoutOutsByName">
      <h1>Shout outs for {name}</h1>
      <Link to="/">Back to all Shoutouts</Link>
      <ShoutOutsList
        shoutOuts={shoutOuts}
        deleteShoutOutHandler={deleteShoutOutHandler}
      />
      <AddShoutOutForm
        addShoutOutHandler={addShoutOutHandler}
        recipient={name}
      />
    </div>
  );
};

export default ShoutOutsByName;
