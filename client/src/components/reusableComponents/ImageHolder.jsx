import React from 'react';
import { Image } from 'antd';
import UPLOAD_URL from '../../utils/UPLOAD_URL';

const ImageHolder = ({ FILE_NAME }) => {
	return (
		<>
			<Image
				width={300}
				src={`${UPLOAD_URL}/${FILE_NAME}`}
				alt={`${FILE_NAME} Image`}
			/>
		</>
	);
};

export default ImageHolder;
