import React from 'react';

type EditProfilePresenterProps = {
  user: any;
  nickConfirm: any;
  onSubmit: any;
  onChange: any;
  nickname: string;
  gender: string;
  biography: string;
  instagram: string;
  facebook: string;
  twitter: string;
};

const EditProfilePresenter = ({
  user,
  nickConfirm,
  onSubmit,
  onChange,
  nickname,
  gender,
  biography,
  instagram,
  facebook,
  twitter,
}: EditProfilePresenterProps) => {
  return (
    <div className="px-4 pt-4">
      <form action="#" className="flex flex-col space-y-8" onSubmit={onSubmit}>
        <div>
          <h3 className="text-2xl font-semibold font-Jua">Edit Profile</h3>
        </div>

        <div className="form-item">
          <label className="text-xl font-Jua">ID</label>
          <input
            type="text"
            value={user.user_id}
            className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
            disabled
          />
        </div>

        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 ">
          <div className="form-item w-full">
            <label className="text-xl font-Jua ">Nickname</label>
            <div className="flex">
              <input
                type="text"
                id="nickname"
                defaultValue={nickname}
                onChange={onChange}
                className="w-9/12 appearance-none text-black rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-gray "
              />
              <button
                className="w-2/12 min-w-5 btn border border-gray-dark p-1  font-semibold cursor-pointer ml-2 bg-gray-dark rounded-md text-sm lg:text-base font-Jua"
                onClick={nickConfirm}
              >
                Confirm
              </button>
            </div>
          </div>

          <div className="form-item w-full">
            <label className="text-xl font-Jua">Gender</label>
            <select
              id="gender"
              name="gender"
              className="w-full appearance-none text-black rounded shadow py-1.5 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-gray "
              required
              defaultValue={gender}
              onChange={onChange}
            >
              <option>Man</option>
              <option>Woman</option>
            </select>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold font-Jua">More About Me</h3>
        </div>

        <div className="form-item w-full">
          <label className="text-xl font-Jua">Biography</label>
          <textarea
            cols={30}
            rows={10}
            className="w-full appearance-none text-black  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
            value={biography}
            id="biography"
            onChange={onChange}
          ></textarea>
        </div>

        <div>
          <h3 className="text-2xl font-semibold font-Jua">My Social Media</h3>
        </div>

        <div className="form-item">
          <label className="text-xl font-Jua">Instagram</label>
          <input
            type="text"
            value={instagram}
            className="w-full appearance-none text-black  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
            id="instagram"
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label className="text-xl font-Jua">Facebook</label>
          <input
            type="text"
            value={facebook}
            className="w-full appearance-none text-black  rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
            id="facebook"
            onChange={onChange}
          />
        </div>
        <div className="form-item">
          <label className="text-xl font-Jua">Twitter</label>
          <input
            type="text"
            value={twitter}
            className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
            id="twitter"
            onChange={onChange}
          />
        </div>
        <div className="flex justify-end mr-10">
          <button
            type="submit"
            className="btn border border-gray-dark p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-dark"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePresenter;
