import { useState } from "react";

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="search" />
      <label style={{ padding: "0 1rem" }}>
        <input
          type="checkbox"
          name="latest"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{" "}
        New only
      </label>
    </form>
  );
};

export default BlogFilter;
