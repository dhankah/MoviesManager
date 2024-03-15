import Dialog from '../components/Dialog';
import MovieForm from '../components/MovieForm';

export default {
  title: 'Dialog',
  component: Dialog,
};

var movieInfo = {
    title: "Scary Fog",
    url: "www.movie.com",
    genres: "Drama",
    releaseYear: "2007",
    rating: "2.7",
    runtime: "12 hours",
    description: "so scary"
}

export const AddMovie = {
    args: {
        title: "Add Movie",
        onClose: () => console.log("Close the window"),
        children: <MovieForm></MovieForm>
    }  
  }

export const EditMovie = {
    args: {
        title: "Edit Movie",
        onClose: () => console.log("Close the window"),
        children: <MovieForm movieInfo = {movieInfo}></MovieForm>
    }  
  }

  export const DeleteMovie = {
    args: {
        title: "Delete Movie",
        onClose: () => console.log("Close the window"),
        children: <div><p>Are you sure you want to delete this movie?</p><button>Confirm</button></div>
    }  
  }  