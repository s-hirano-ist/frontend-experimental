"use client";
import {
  Box,
  ImageList as MuiImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
} from "@mui/material";
import { useState } from "react";

const ImageList = ({ images }: { images: string[] }) => {
  const [imagePath, setImagePath] = useState<string>();
  const handleOpen = (path: string) => setImagePath(path);
  const handleClose = () => setImagePath(undefined);

  return (
    <MuiImageList cols={3} gap={8} sx={{ mx: 8 }}>
      {images.map(path => (
        <ImageListItem key={path}>
          <img
            src={`/assets/images/${path}?w=248&fit=crop&auto=format`}
            srcSet={`/assets/images/${path}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={path}
            loading="lazy"
            onClick={() => handleOpen(path)}
          />
          <ImageListItemBar
            position="below"
            title={path
              .replace(".jpeg", "")
              .replace(".png", "")
              .replace(".jpg", "")}
          />
        </ImageListItem>
      ))}
      <Modal
        open={imagePath !== undefined}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
          }}>
          <img
            src={`/assets/images/${imagePath}`}
            srcSet={`/assets/images/${imagePath}`}
            width="100%"
            height="100%"
            alt={imagePath}
            loading="lazy"
          />
        </Box>
      </Modal>
    </MuiImageList>
  );
};

export default ImageList;
