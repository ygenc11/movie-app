import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Pagination({
  page,
  totalPages,
  setSearchParams,
  query,
}) {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";

  return (
    <div className="container py-3">
      <div className="border p-3">
        <div className="d-flex justify-content-between align-items-center">
          <button
            className={`btn btn-outline-${textColor}`}
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) - 1 })
            }
            disabled={page <= 1}
          >
            Previous
          </button>
          <div className={`btn btn-outline-${textColor}`}>
            <span className="mx-2">
              Page {page} / {totalPages}
            </span>
          </div>
          <button
            className={`btn btn-outline-${textColor}`}
            onClick={() =>
              setSearchParams({ q: query, page: Number(page) + 1 })
            }
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
