import { FaTrashAlt } from "react-icons/fa";
import React from "react";
import PropTypes from "prop-types";
import Card from "../shared/Card";

export default function Task({
  id,
  title,
  description,
  checked,
  handelDelete,
  handelCheck,
}) {
  return (
    <Card>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handelCheck(id)}
      />
      <div
        style={checked ? { textDecoration: "line-through" } : null}
        className="text-display"
      >
        {title}
      </div>
      <div
        style={checked ? { textDecoration: "line-through" } : null}
        className="text-description"
      >
        {description}
      </div>
      <button onClick={() => handelDelete(id)} className="delete">
        <FaTrashAlt />
      </button>
    </Card>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
