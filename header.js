const createHeader = () => {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  heading.textContent = "Đây là tiêu đề";
  header.appendChild(heading);
  return header;
};

export default createHeader;
