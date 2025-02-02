import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGalery = ({ photo, onClick }) => {
  return (
    <ul className={s.gallery}>
      {photo.map((item) => (
        <li onClick={() => onClick(item)} key={item.id} className={s.item}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGalery;
