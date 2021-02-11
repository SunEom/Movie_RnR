import React from 'react';
import Comments from '../components/Comments';

type CommentContainerProps = {
  contents: string;
  onSubmit: (e: any) => void;
  onChange: (e: any) => void;
};

const CommentContainer = ({ onSubmit, onChange, contents }: CommentContainerProps) => {
  return (
    <div>
      <section className="rounded-b-lg  mt-8 ">
        <form method="POST" onSubmit={onSubmit}>
          <textarea
            name="contents"
            className="w-full shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-sm"
            placeholder="Leave a comment..."
            cols={6}
            rows={6}
            id="comment_content"
            spellCheck="false"
            value={contents}
            onChange={onChange}
          ></textarea>
          <button className="font-bold py-2 px-4 w-full bg-gray-darker text-lg text-white shadow-md rounded-lg ">Comment</button>
        </form>

        <div className="mt-10">Comments</div>

        <div id="task-comments" className="pt-4">
          <Comments user_id="@Shanel" contents="Hi good morning will it be the entire house." />
          <Comments user_id="@Tim Motti" contents="Hello. Yes, the entire exterior, including the walls." />
        </div>
      </section>
    </div>
  );
};

export default CommentContainer;
