import { FirebaseContext } from 'context/firebase';
import React, { useContext, useEffect, useState } from 'react';

function useContent(target) {
	const [content, setContent] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		firebase
			.firestore()
			.collection(target)
			.get()
			.then((snapshot) => {
				const allContent = snapshot.docs.map((contentObj) => ({
					...contentObj.data(),
					docId: contentObj.id,
				}));

				setContent(allContent);
			})
			.catch((err) => console.log(err.message));
	}, []);

	return { [target]: content };
}

export default useContent;
