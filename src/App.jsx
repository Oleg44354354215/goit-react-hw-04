import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { fetchDate } from "./services/api";
import ImageGalery from "./components/ImageGalery/ImageGalery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";
function App() {
  const [photo, setPhoto] = useState([]);
  const [isload, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;
    const handleDate = async () => {
      try {
        setIsLoad(true);
        setError(false);
        const res = await fetchDate(query, page);
        setPhoto((prev) => [...prev, ...res]);
      } catch {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };
    handleDate();
  }, [query, page]);

  const getTypeDate = (item) => {
    if (!item.trim()) {
      toast.error("Search query cannot be empty!");
      return;
    }
    setQuery(item);
    setPhoto([]);
    setPage(1);
  };

  const openModal = (image) => {
    setSelectedPhoto(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };
  return (
    <>
      <SearchBar getTypeDate={getTypeDate} />
      <ImageGalery photo={photo} onClick={openModal} />
      {photo.length > 0 && <LoadMoreBtn setPage={setPage} />}
      {photo.length === 0 && <p>List is empty! Please search sth:)</p>}
      <ImageModal
        photo={selectedPhoto}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      {isload && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
}
export default App;
