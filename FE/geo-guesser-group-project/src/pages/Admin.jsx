import React, { useState } from "react";
import { Input } from '@chakra-ui/react'

function Admin() {
  const [locationImage, setLocationImageImage] = useState();
  const [answers, setaAswers] = useState({});
  const [isAdmin, setisAdmin] = useState(false);


  return (
  <div className="admin-container">
    <h1>Admin Page</h1>
    <Input placeholder='Basic usage' />

    {/* <FilePicker
    onFileChange={(fileList) => { }}
    placeholder="placeholder"
    clearButtonLabel="label"
    multipleFiles={true}
    accept="application/json"
    hideClearButton={false}
    ref={myRef}
/> */}

    {/* <FileUpload
            accept={'image/*'}
            multiple
            register={register('file_', { validate: validateFiles })}
          >
            <Button leftIcon={<Icon as={FiFile} />}>
              Upload
            </Button>
          </FileUpload> */}


  </div>


  )
};

export default Admin;
