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
    .delete(`${process.env.REACT_APP_SERVER_URL}/comment/${id}`, { withCredentials: true })
    .then(() => {
      const movie_id = window.location.href.split('/')[window.location.href.split('/').length - 1];
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/comment/${movie_id}`)
        .then((response) => {
          console.log(response.data.data);
          setComments(response.data.data);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.error(err));
};

const onSave = (data: any, setComments: any) => {
  if (data.contents === '') {
    return alert('Please input Comment!');
  }
  axios.patch(`${process.env.REACT_APP_SERVER_URL}/comment/update`, { ...data }, { withCredentials: true }).then(() => {
    const movie_id = +window.location.pathname.split('/')[window.location.pathname.split.length];
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/comment/${movie_id}`)
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
