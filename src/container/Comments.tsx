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

const onDelete = async (id: number) => {
  axios.delete(`http://localhost:8000/comment/${id}`, { withCredentials: true }).catch((err) => console.error(err));
};

const onSave = (data: any) => {
  axios.patch('http://localhost:8000/comment/update', { ...data }, { withCredentials: true });
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
