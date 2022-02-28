/* eslint-disable react/no-typos */
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { Robot } from "../../models/robot";
import { updateRobot } from "../../redux/robots/action-creators";
//import { robotsReducer } from "../../redux/robots/robots-reducers";
import { update } from "../../services/api";

// export function Add() {
//   const dispatch = useDispatch();
//   const addRobot = (newRobot) => {
//     dispatch(createRobot(newRobot));
//   };

// Se toma robot desestructurado del componente robot. Así se extraen sus propiedades.
// se declara dispatch conteniendo el hook useDispatch
export function Update({ robot }) {
  const dispatch = useDispatch();

  // el estado inicial contiene las propiedades del robot, por eso vienen escritas
  // automáticamente en el formulario de update
  const [change, setChange] = useState({
    _id: robot._id,
    name: robot.name,
    speed: robot.speed,
    stamina: robot.stamina,
    image: robot.image,
    date: robot.date,
  });

  const toggleRobot = (change) => {
    update(change).then((resp) => dispatch(updateRobot(change)));
  };

  // Al pulsar en el botón Update, se cambia el estado a los valores que hayamos
  // puesto en el formulario.
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Updated robot", change);
    toggleRobot(change);
    setChange({
      _id: robot._id,
      name: robot.name,
      speed: robot.speed,
      stamina: robot.stamina,
      image: robot.image,
      date: robot.date,
    });

    console.log(setChange);
  };

  // Al modificarse el texto de cualquier campo del formulario, se desestructura el valor de robot
  // actualizado, y se modifica el valor que acabamos de escribir. Se almacena en setChange
  // en espera de que pulsemos el botón de submit y se modifique todo en el estado.
  const handleChange = (ev) => {
    setChange({ ...change, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h2>Update Robot</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del robot"
          value={change.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="speed"
          placeholder="speed from 1 to 10"
          value={change.speed}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stamina"
          placeholder="stamina from 1 to 10"
          value={change.stamina}
          onChange={handleChange}
        />
        <input
          type="number"
          name="date"
          placeholder="date of creation"
          value={change.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="insert url with the robot image"
          value={change.image}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
      </form>
    </>
  );
}
