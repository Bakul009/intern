import { useEffect, useState } from 'react';
//import './src/App.css';
import { storage } from "../../firebase"
import { uuidv4 } from '@firebase/util'


import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref, uploadBytesResumable,
} from "firebase/storage"
//import { upload } from '@testing-library/user-event/dist/upload';


function Upload() {
  const [image, setImage] = useState(null);
  const [imglist, setImglist] = useState([]);
  const [progress, setProgress] = useState(0);
  // const imageListRef = ref(storage, "img/${ uuidv4()}")
  //const imageListRef = ref(storage, "img/")

  // Upload file
  const uploadFile = () => {
    if (image == null) return;

    const imageRef = ref(storage, `img/${image.name }`)
    const uploadFile = uploadBytesResumable(imageRef, image);

    uploadFile.on('state_changed', (snapshot) => {
      const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setProgress(progress)
    }, (err) => {

    }, () => {
      setProgress(0);
      getDownloadURL(uploadFile.snapshot.ref).then((url) => {
        setImglist((prev) => [...prev, { url: url, ref: uploadFile.snapshot.ref }])
      })
      alert("File uploaded Successfully")
    });
    setImage(null)
  }


  // Delete file
  const deleteHandel = (ref, url) => {
    deleteObject(ref).then((res) => {
      setImglist(imglist.filter((img) => img.url !== url))
      alert("Successfully deleted")
    })
  }

  // Get data
  useEffect(() => {

    // var s= ""
  var imageListRef2 = ref(storage, "img/"+uuidv4())

  console.log("url "+ imageListRef2.fullPath)

    const getData = () => {
      listAll(imageListRef2).then((res) => {
        res.items.map((item) => {
          getDownloadURL(item).then((url) => {
            setImglist((prev) => [...prev, { url: url, ref: item }])
          })
        })
      })
    }
    getData()
  }, [])


  return (
    <div className="App container mt-3">
      <div className='d-flex coloum'>
        <input type="file" className="form-control"
          id="img-upload"
          accept="file/*"
          onChange={(event) => {
            setImage(event.target.files[0])
          }} />
        <button className="btn btn-success mx-3" onClick={uploadFile}>Upload</button>
      </div>


      {
        progress !== 0 ? (
          <div className='progress my-2'>
            <div className='progress-bar'
              style={{ width: `${progress}%` }}
            >
            </div>
          </div>
        ) : null

      }

      <div style={{
        display: "flex",
        flexDirection: "column-reverse",
      }}>

        {imglist && imglist.map((fileobj) => (
          <div className='card my-3 w-25'>
            <img className="" src={fileobj.url}  alt=""/>
            <button className="btn btn-danger deletebtn"
              onClick={() => deleteHandel(fileobj.ref, fileobj.url)}
            >
              Delete
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Upload;
