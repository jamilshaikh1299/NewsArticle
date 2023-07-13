import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddNews.css";

const AddNews = () => {
  const baseURL = "https://talkk7uatcms.talkk.in/api/v4/apiai";

  const [post, setPost] = React.useState({});

  const [image, setImage] = useState("");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        baseURL,

        {
          data: {
            _action: "createNews",
            _param: {
              title: title,
              description: description,
              publish_date: "19 June 2023",
              author: "GIS",
              source: "GIS",
              tags: ["test"],
              expiry_date:
                "Fri Jul 07 2023 19:59:34 GMT+0530 (India Standard Time)",
              status: "A",
              language: "en",
              company_id: "61385f841b0a8a7b682470e7",
              group_id: "637741e10485361fb9b17103",
              image: image,
            },
          },
        },
        {
          headers: {
            Authorization: `eFRJb0NlcXNOTGZoTWJueA==`,
          },
        }
      )
      .then((response) => {
        setPost(response.data);
        alert("News Added");
        navigate("/");
      });

    setTitle("");
    setDescription("");
  };

  return (
    <div class="container">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          name="description"
          placeholder="Description"
          rows={10}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="uploadImage">
          <label htmlFor="imgs">Image</label>
          <br />
          <input
            id="imgs"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          ></input>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddNews;
