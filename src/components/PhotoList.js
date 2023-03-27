import React from "react";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhtoListItem from "./PhtoListItem";

const PhotoList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);

  const [addPhoto, addPhtotResults] = useAddPhotoMutation();

  const handleAddPhto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Erro fetching phtos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhtoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhtotResults.isLoading} onClick={handleAddPhto}>
          + Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {" "}
        {content}
      </div>
    </div>
  );
};

export default PhotoList;
