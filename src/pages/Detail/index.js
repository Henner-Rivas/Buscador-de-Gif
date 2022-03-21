import Helmet from "react-helmet";
import { Redirect } from "wouter";
import Gif from "../../components/Gif/Gif";
import useSEO from "../../hooks/useSEO";
import useSingleGif from "../../hooks/useSingleGif";
import useTitle from "../../hooks/useTitle";
import SearchForm from "../../components/SearchForm";

const Detail = ({ params }) => {
  const { gif, isError, isLoading } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";
  /* useTitle({title})
useSEO({description:`Datail of  ${title}       `}) */

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando </title>
        </Helmet>
      </>
    );
  }

  if (isError) {
    return <Redirect to="/404"> </Redirect>;
  }

  return (
    <div>
      <Helmet>
        <title>{title} || Giffy </title>
      </Helmet>
      <div className="div-form-title">
        <div className="div-title">
          <p>Giffy</p>
        </div>

        <SearchForm  />
      </div>
      gif con id {params.id}
      <Gif {...gif} />
    </div>
  );
};

export default Detail;
