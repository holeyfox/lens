import Avatar from 'react-avatar-edit'
import Image from 'next/image'
import { useState } from 'react'

const ProfilePhoto = (imageSrc) => {
    const [image, setImage] = useState(imageSrc);
    const [preview, setPreview] = useState(null);

    const onCrop = (preview) => {
        setPreview(preview);
    }

    const onBeforeFileLoad = (elem) => {
        if(elem.target.files[0].size > 71680){
            alert("File is too big!");
            elem.target.value = "";
          };
    }

    const onClose = () => {
        setPreview(null);
    }

	return (
        <div>
            <Avatar
            width={390}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={image}
            />
            <image src={image} alt="Preview" />
      </div>
	);
};

export default ProfilePhoto;