import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import userDefaultPic from '../../assets/userDefaultPic.png';



const UpdateProfile = () => {

    const {user, setUser} = useAuth();
    const [updateName, setUpdateName] = useState(user?.displayName || '');
    const [updateImage, setUpdateImage] = useState(user?.photoURL || '');

    const handleUpdate = (e) => {
        e.preventDefault();

        updateProfile(user, {
            displayName:updateName,
            photoURL: updateImage
        })
        .then(() => {
            setUser({ ...user, displayName: updateName, photoURL: updateImage });
            setUpdateName('');
            setUpdateImage('');
            toast.success('profile updated successfully');
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Helmet>
                <title>Dream Vista | Update Profile</title>
            </Helmet>

            <div className="mb-5 lg:mb-10">
                <div className="hero bg-base-200 py-2 md:py-[40px] rounded-lg">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="flex flex-col items-center justify-center text-center bg-white py-[30px] md:py-[50px] lg:py-[98px] px-[60px] md:px-[130px] lg:px-[140px] rounded-[14px]">
                            <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] border-4 border-gray-500 rounded-full">
                                {
                                    user?.photoURL === null ? 
                                    <img className="rounded-full w-full h-full" src={userDefaultPic}/>
                                    :
                                    <img className="rounded-full w-full h-full" src={user ? user.photoURL : userDefaultPic}/>
                                }
                            </div>
                            <div className="text-center mt-2 md:mt-4">
                                <p className="text-neutral-900 text-[14px] md:text-xl font-semibold">{user.displayName}</p>
                                <p className="text-neutral-700 text-[14px] md:text-xl font-semibold">{user.email}</p>
                            </div>
                        </div>

                        <div className="card shrink-0 w-full md:max-w-xl lg:max-w-2xl bg-base-100">
                            <h1 className="text-center text-neutral-700 text-[25px] md:text-[30px] font-semibold mb-[-30px] pt-5">Update Your Profile</h1>
                            <form onSubmit={handleUpdate} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Name</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        className="input input-bordered"
                                        value={updateName}
                                        onChange={(e) => setUpdateName(e.target.value)}
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Email</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        className="input input-bordered"
                                        value={user.email}
                                        // onChange={(e) => console.log(e.target.value)}
                                        readOnly
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-center text-neutral-700 text-base md:text-xl font-semibold">Photo URL</span>
                                    </label>
                                    <input 
                                        type="url" 
                                        className="input input-bordered"
                                        value={updateImage}
                                        onChange={(e) => setUpdateImage(e.target.value)}
                                    />
                                    </div>

                                <div className="form-control mt-6">
                                    <button className="bg-green-600 hover:bg-green-800 duration-300 w-full py-3 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UpdateProfile;