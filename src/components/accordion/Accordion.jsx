import React, { useState } from "react";
const dummyData = [
  {
    title: "Section1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt, accusamus facilis omnis ratione eum voluptas aspernatur fugiat nihil sunt rerum assumenda dolores exercitationem! At ipsum aliquam neque deleniti veniam!",
  },
  {
    title: "Section2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt, accusamus facilis omnis ratione eum voluptas aspernatur fugiat nihil sunt rerum assumenda dolores exercitationem! At ipsum aliquam neque deleniti veniam!",
  },
  {
    title: "Section3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt, accusamus facilis omnis ratione eum voluptas aspernatur fugiat nihil sunt rerum assumenda dolores exercitationem! At ipsum aliquam neque deleniti veniam!",
  },
  {
    title: "Section4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt, accusamus facilis omnis ratione eum voluptas aspernatur fugiat nihil sunt rerum assumenda dolores exercitationem! At ipsum aliquam neque deleniti veniam!",
  },
];
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordionItem bg-blue-100 p-4 my-2 shadow flex flex-col gap-y-2">
      <div
        className="titleContainer font-bold cursor-pointer text-2xl"
        onClick={onClick}
      >
        {title}
        {isOpen ? "  -" : "  +"}
      </div>
      {isOpen && <div className="contentContainer ">{content}</div>}
    </div>
  );
};
const Accordion = () => {
  const [indexSelected, setIndexSelected] = useState(null);
  const handleClick = (index) => {
    setIndexSelected((current) => (current === index ? null : index));
  };
  return (
    <div className="accordionContainer">
      {dummyData.map((item, index) => {
        return (
          <>
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={indexSelected === index}
              onClick={() => handleClick(index)}
            />
          </>
        );
      })}
    </div>
  );
};

export default Accordion;
