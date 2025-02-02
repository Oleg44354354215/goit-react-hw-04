import s from "./ImageGallery.module.css";

const ImageCard = ({ item }) => {
  return (
    <div className={s.div}>
      <img className={s.img} src={item.urls.small} alt={item.alt_description} />
    </div>
  );
};

export default ImageCard;
