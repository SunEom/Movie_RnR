import Comments from '../components/Comments';
import { connect } from 'react-redux';
import axios from 'axios';

type CommentsProps = {
  id: number;
  commenter: number;
  contents: string;
  user: any;
  setComments: any;
  comments: any;
};

const onDelete = async (id: number, setComments: any) => {
  axios
    .delete(`http://localhost:8000/comment/${id}`, { withCredentials: true })
    .then(() => {
      const movie_id = +window.location.pathname.split('/')[window.location.pathname.split.length];
      axios
        .get(`http://localhost:8000/comment/${movie_id}`)
        .then((response) => {
          console.log(response.data.data);
          setComments(response.data.data);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.error(err));
};

const onSave = (data: any, setComments: any) => {
  axios.patch('http://localhost:8000/comment/update', { ...data }, { withCredentials: true }).then(() => {
    const movie_id = +window.location.pathname.split('/')[window.location.pathname.split.length];
    axios
      .get(`http://localhost:8000/comment/${movie_id}`)
      .then((response) => {
        console.log(response.data.data);
        setComments(response.data.data);
      })
      .catch((err) => console.log(err));
  });
};

const onChange = (data: any, cb: any) => {
  cb(data);
};

const modeToggle = (mode: 'default' | 'edit', modeHandler: any) => {
  if (mode === 'default') {
    modeHandler('edit');
  } else {
    modeHandler('default');
  }
};

const mapStateToProps = (state: any, { commenter, contents, user, setComments, comments }: CommentsProps) => {
  return { commenter, contents, onDelete, modeToggle, user, onChange, onSave, setComments, comments };
};

export default connect(mapStateToProps)(Comments);
