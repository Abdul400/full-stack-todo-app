import React, { useState, useRef, useEffect } from 'react';
type myData = {
  myTitle: string | null | undefined;
  myDescription: string | null | undefined;
};

type Props = {
  openEdit: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
  editData: myData;
};
const Edit: React.FC<Props> = ({ openEdit, editData }) => {
  const titleInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (titleInput.current) {
      titleInput.current.value = editData.myTitle || '';
    }
    if (descriptionInput.current) {
      descriptionInput.current.value = editData.myDescription || '';
    }
  }, [editData]);

  const [selectedTags, setSelectedTags] = useState<(string | null)[]>([]);
  const [tags, setTags] = useState([
    { tag: 'work', isSelected: false },
    { tag: 'study', isSelected: false },
    { tag: 'entertainment', isSelected: false },
    { tag: 'family', isSelected: false },
  ]);
  const chosenTags = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const tag = (e.target as HTMLDivElement).textContent;
    if (selectedTags.includes(tag)) {
      setTags((prevState) => {
        return prevState.map((item) =>
          item.tag === tag ? { ...item, isSelected: false } : item
        );
      });
      setSelectedTags((prevState) => prevState.filter((item) => item !== tag));
    } else {
      setTags((prevState) => {
        return prevState.map((item) =>
          item.tag === tag ? { ...item, isSelected: true } : item
        );
      });
      setSelectedTags((prevState) => [...prevState, tag]);
    }
  };

  let style1 = {
    backgroundColor: tags[0].isSelected ? '#d7d7d5' : 'white',
  };
  let style2 = {
    backgroundColor: tags[1].isSelected ? '#d7d7d5' : 'white',
  };
  let style3 = {
    backgroundColor: tags[2].isSelected ? '#d7d7d5' : 'white',
  };
  let style4 = {
    backgroundColor: tags[3].isSelected ? '#d7d7d5' : 'white',
  };
  return (
    <div className="editPopup">
      <div className="buttons-container">
        <p
          onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) =>
            openEdit(e)
          }
          className="cancel"
        >
          Cancel
        </p>
        <button className="addEdit">Edit</button>
      </div>
      <h2 className="title editTitle">Title</h2>
      <input
        ref={titleInput}
        type="text"
        className="editInput"
        placeholder="add a title..."
      />
      <h2 className="title description">Description</h2>
      <textarea
        name="description"
        id="description"
        className="descriptionArea"
        placeholder="add a description..."
        ref={descriptionInput}
      ></textarea>
      <h2 className="tagsHeader title">Tags</h2>
      <div className="tags-container2">
        <div
          className="work group group1"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => chosenTags(e)}
          style={style1}
        >
          <div className="work-circle circle circle1"></div>
          <p className="work-text text">Work</p>
        </div>
        <div
          className="study group group1"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => chosenTags(e)}
          style={style2}
        >
          <div className="study-circle circle circle1"></div>
          <p className="study-text text">Study</p>
        </div>
        <div
          className="entertainment group group1"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => chosenTags(e)}
          style={style3}
        >
          <div className="entertainment-circle circle circle1"></div>
          <p className="entertainment-text text">Entertainment</p>
        </div>
        <div
          className="family group group1"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => chosenTags(e)}
          style={style4}
        >
          <div className="family-circle circle circle1"></div>
          <p className="family-text text">Family</p>
        </div>
      </div>
    </div>
  );
};

export default Edit;
