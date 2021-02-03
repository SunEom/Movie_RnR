import React from 'react';
import { TextField, Button } from '@material-ui/core';

type CreateProps = { onChange: (e: any) => void; onSubmit: (e: any) => void };

const Create = ({ onChange, onSubmit }: CreateProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-6/12 px-13">
        <form className="post__form" noValidate autoComplete="off" onSubmit={onSubmit}>
          <div>
            <TextField
              id="standard-basic"
              label="Title"
              style={{ minWidth: '10rem', width: '25%' }}
              inputProps={{ name: 'title', onChange }}
              required
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Genres"
              style={{ minWidth: '6rem', width: '12%' }}
              inputProps={{ name: 'genres', onChange }}
              required
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              type="number"
              label="Rates / 10"
              style={{ minWidth: '6rem', width: '12%' }}
              inputProps={{ min: 0, max: 10, step: 0.1, name: 'rates', onChange }}
              required
            />
          </div>
          <div className="mt-10">
            <TextField
              id="outlined-multiline-static"
              label="Overview"
              multiline
              rows={8}
              defaultValue="This movie is ..."
              variant="outlined"
              style={{ width: '100%' }}
              inputProps={{ name: 'overview', onChange }}
              required
            />
          </div>
          <div className="flex justify-end mt-5">
            <Button variant="contained" color="primary" size="small" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
