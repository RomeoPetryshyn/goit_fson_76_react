// import React from "react";
// import _ from 'lodash';

// class ClassComponent extends React.Component {

//     state = {
//         images: [],
//         page: 1,
//         isLoading: false,
//         isError: false,
//         isShowButton: false,
//     }

//     async componentDidUpdate(prevProps, prevState) {
//         const prevQueryImages = prevProps.queryImages;
//         const nextQueryImages = this.props.queryImages;
        
//         const prevQueryPage = prevState.page;
//         const nextQueryPage = this.state.page;

//         // перевірка на рівність масивів
//         if (!_.isEqual(prevQueryImages, nextQueryImages) || prevQueryPage !== nextQueryPage) {
//             this.setState({ isLoading: true });
            
//             try {
//                 const loadedImages = await api.fetchImages(nextQueryImages, nextQueryPage);
//                     // переписати map
//                 const images = loadedImages.map((image) => {
//                     return {
//                         id: image.id,
//                         largeImageURL: image.largeImageURL,
//                         webformatURL: image.webformatURL,
//                         tags: image.tags,
//                     }
//                 });

//                 if (images.length < 12) {
//                     this.setState({ images });
//                     this.setState({ isShowButton: false });
//                 } else {
//                     this.setState({ isShowButton: true });
//                     this.setState(prevState => ({
//                         images: [...prevState.images, ...images],
//                     }));
//                 }
//             } catch(error) {
//                 console.error(error);
//                 this.setState({ isError: true });
//             } finally {
//                 this.setState({ isLoading: false });
//             }
//         }
//     }
// }

// export default ClassComponent;