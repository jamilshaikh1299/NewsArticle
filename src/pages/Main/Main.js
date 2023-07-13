import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";
import ReactPaginate from "react-paginate";

const Main = () => {
  const baseURL = "https://talkk7uatcms.talkk.in/api/v4/apiai";

  const [post, setPost] = React.useState({});

  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 6;
  const pagesVisited = pageNumber * userPerPage;

  const displayUSers = post?.data?.data
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((news) => {
      return (
        <Card
          cImage={
            news.image
              ? news.image
              : `https://media.istockphoto.com/id/1361794658/photo/a-labrador-retriever-dog-in-the-park.webp?b=1&s=170667a&w=0&k=20&c=rtFODV2HwPiEhaG9i_KJE4KeYa7yxcraYn-rLuJ8NLU=`
          }
          cTitle={news.title}
          cDesc={
            news.description.length < 100
              ? news.description
              : "News Description"
          }
        />
      );
    });

  const pageCount = Math.ceil(post?.data?.data.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  React.useEffect(() => {
    axios

      .post(
        baseURL,
        {
          data: {
            _action: "getAllNews",

            _param: {
              company_id: "61385f841b0a8a7b682470e7",

              group_id: "637741e10485361fb9b17103",
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
      });
  }, []);

  return (
    <>
      <Link to="/addNews">
        <div>
          <button className="c-button">Add</button>
        </div>
      </Link>

      <div>
        {displayUSers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"pagibationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>

      {console.log(post?.data?.data)}
    </>
  );
};

export default Main;
