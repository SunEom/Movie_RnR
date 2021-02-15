import React from 'react';
import Comments from '../container/Comments';
type CommentContainerProps = {
  contents: string;
  comments: Array<any>;
  onSubmit: (e: any) => void;
  onChange: (e: any) => void;
  user: any;
};

const CommentContainer = ({ onSubmit, onChange, contents, comments, user }: CommentContainerProps) => {
  return (
    <div>
      <section className="rounded-b-lg  mt-8 ">
        <form method="POST" onSubmit={onSubmit}>
          <textarea
            name="contents"
            className="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-sm"
            placeholder={user ? 'Leave a comment...' : 'Please login before leave comment ...'}
            cols={6}
            rows={6}
            id="comment_content"
            spellCheck="false"
            value={contents}
            onChange={onChange}
            disabled={!user}
          ></textarea>
          <button
            className="font-bold py-2 px-4 w-full bg-gray-darker text-lg text-white shadow-md rounded-lg "
            type="submit"
            disabled={!user}
          >
            Comment
          </button>
        </form>

        <div className="mt-10">Comments</div>

        <div id="task-comments" className="pt-4">
          {comments.map((comment, idx) => (
            <Comments id={idx} key={idx} user={user} {...comment} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommentContainer;
