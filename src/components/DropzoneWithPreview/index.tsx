import React, { useState, useEffect, useCallback } from 'react';
import { uuid } from 'uuidv4';
import { useDropzone } from 'react-dropzone';
import { Container } from '@material-ui/core';
import {
  Img,
  Thumb,
  ThumbInner,
  ThumbsContainer,
  ContainerDropzone,
  ButtonRemove,
} from './styles';

interface FileDropzone extends File {
  preview: string;
  id: string;
}

const DropzoneWithPreview: React.FC = () => {
  const [files, setFiles] = useState<FileDropzone[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      const newFiles: FileDropzone[] = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: uuid(),
        }),
      );
      setFiles([...files, ...newFiles]);
    },
  });

  const handleRemoveImage = useCallback(
    id => {
      const newFiles = files.filter(file => file.id !== id);

      setFiles(newFiles);
    },
    [files],
  );

  const thumbs = files.map(file => (
    <Thumb key={file.id}>
      <ThumbInner>
        <Img src={file.preview} />
      </ThumbInner>
      <ButtonRemove type="button" onClick={() => handleRemoveImage(file.id)}>
        Remover
      </ButtonRemove>
    </Thumb>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <Container>
      <ContainerDropzone>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Selecione os arquivos</p>
        </div>
        <ThumbsContainer>{thumbs}</ThumbsContainer>
      </ContainerDropzone>
    </Container>
  );
};

export default DropzoneWithPreview;
