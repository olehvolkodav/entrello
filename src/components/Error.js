import React from "react";

export default function Error({ error }) {
  return <div className="text-red-500">{error.message}</div>;
}
